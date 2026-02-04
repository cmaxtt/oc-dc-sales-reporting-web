// Sales Insight Hub - Main Application Logic

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const dbForm = document.getElementById('db-form');
    const testConnectionBtn = document.getElementById('test-connection');
    const generateReportsBtn = document.getElementById('generate-reports');
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const browseBtn = document.getElementById('browse-btn');
    const analyzeFilesBtn = document.getElementById('analyze-files');
    const processingSection = document.getElementById('processing-section');
    const resultsSection = document.getElementById('results-section');
    const progressFill = document.getElementById('progress-fill');
    const processingMessage = document.getElementById('processing-message');
    const processingSteps = document.querySelectorAll('.step');
    const metricsGrid = document.getElementById('metrics-grid');
    const summaryContent = document.getElementById('summary-content');
    const salesTableBody = document.getElementById('sales-table-body');
    const rowCount = document.getElementById('row-count');
    const copySummaryBtn = document.getElementById('copy-summary');
    const regenerateSummaryBtn = document.getElementById('regenerate-summary');
    const refreshDataBtn = document.getElementById('refresh-data');
    const exportButtons = document.querySelectorAll('.export-btn');
    
    // State
    let uploadedFiles = [];
    let monthlyChart = null;
    let productsChart = null;
    let currentSummaryIndex = 0;
    let isProcessing = false;
    
    // Initialize the app
    initApp();
    
    function initApp() {
        setupTabs();
        setupDatabaseForm();
        setupFileUpload();
        setupButtonEvents();
        setupExportButtons();
        updateFileList();
    }
    
    // Tab Navigation
    function setupTabs() {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Update active tab button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Database Form Handling
    function setupDatabaseForm() {
        // Load saved credentials from localStorage
        loadSavedCredentials();
        
        // Test connection button
        testConnectionBtn.addEventListener('click', async function() {
            if (isProcessing) return;
            
            const credentials = getDatabaseCredentials();
            if (!validateCredentials(credentials)) {
                showToast('Please fill in all required fields', 'warning');
                return;
            }
            
            // Save credentials for next time
            saveCredentials(credentials);
            
            // Show processing state
            setProcessingState(true, 'Testing database connection...');
            processingSection.style.display = 'block';
            progressFill.style.width = '30%';
            
            try {
                const result = await mockDatabaseConnection(
                    credentials.server,
                    credentials.database,
                    credentials.username,
                    credentials.password,
                    credentials.table
                );
                
                if (result.success) {
                    showToast(`Connected to ${credentials.database} successfully!`, 'success');
                    processingMessage.textContent = `Found ${result.sampleData.rowCount} sales records`;
                    progressFill.style.width = '100%';
                    
                    // Enable generate reports button
                    generateReportsBtn.disabled = false;
                } else {
                    showToast(result.message, 'error');
                }
            } catch (error) {
                showToast('Connection test failed. Please try again.', 'error');
            } finally {
                setTimeout(() => {
                    processingSection.style.display = 'none';
                    progressFill.style.width = '0%';
                    setProcessingState(false);
                }, 1000);
            }
        });
        
        // Generate reports button
        dbForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (isProcessing) return;
            
            const credentials = getDatabaseCredentials();
            if (!validateCredentials(credentials)) {
                showToast('Please fill in all required fields', 'warning');
                return;
            }
            
            await generateReportsFromDatabase(credentials);
        });
    }
    
    // File Upload Handling
    function setupFileUpload() {
        // Browse button
        browseBtn.addEventListener('click', function() {
            fileInput.click();
        });
        
        // File input change
        fileInput.addEventListener('change', function(e) {
            handleFiles(e.target.files);
        });
        
        // Drag and drop
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', function() {
            uploadArea.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleFiles(e.dataTransfer.files);
        });
        
        // Click on upload area
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Analyze files button
        analyzeFilesBtn.addEventListener('click', async function() {
            if (uploadedFiles.length === 0) {
                showToast('Please upload files first', 'warning');
                return;
            }
            
            await generateReportsFromFiles();
        });
    }
    
    // Button Events
    function setupButtonEvents() {
        // Copy summary button
        copySummaryBtn.addEventListener('click', function() {
            const summaryText = summaryContent.textContent;
            navigator.clipboard.writeText(summaryText).then(() => {
                showToast('Summary copied to clipboard!', 'success');
            }).catch(() => {
                showToast('Failed to copy summary', 'error');
            });
        });
        
        // Regenerate summary button
        regenerateSummaryBtn.addEventListener('click', function() {
            generateNewSummary();
        });
        
        // Refresh data button
        refreshDataBtn.addEventListener('click', function() {
            showToast('Refreshing sales data...', 'info');
            setTimeout(() => {
                showToast('Sales data refreshed successfully!', 'success');
                populateSalesTable();
            }, 1000);
        });
    }
    
    // Export Buttons
    function setupExportButtons() {
        exportButtons.forEach(button => {
            button.addEventListener('click', function() {
                const format = this.getAttribute('data-format');
                handleExport(format);
            });
        });
    }
    
    // Helper Functions
    function getDatabaseCredentials() {
        return {
            server: document.getElementById('server').value.trim(),
            database: document.getElementById('database').value.trim(),
            username: document.getElementById('username').value.trim(),
            password: document.getElementById('password').value.trim(),
            table: document.getElementById('table').value.trim() || 'sales'
        };
    }
    
    function validateCredentials(credentials) {
        return credentials.server && credentials.database && credentials.username && credentials.password;
    }
    
    function saveCredentials(credentials) {
        localStorage.setItem('salesHub_server', credentials.server);
        localStorage.setItem('salesHub_database', credentials.database);
        localStorage.setItem('salesHub_username', credentials.username);
        localStorage.setItem('salesHub_table', credentials.table);
    }
    
    function loadSavedCredentials() {
        const server = localStorage.getItem('salesHub_server');
        const database = localStorage.getItem('salesHub_database');
        const username = localStorage.getItem('salesHub_username');
        const table = localStorage.getItem('salesHub_table');
        
        if (server) document.getElementById('server').value = server;
        if (database) document.getElementById('database').value = database;
        if (username) document.getElementById('username').value = username;
        if (table) document.getElementById('table').value = table;
    }
    
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            // Validate file type
            const validTypes = ['application/pdf', 'application/msword', 
                               'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                               'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                               'text/csv'];
            
            if (validTypes.includes(file.type) || file.name.match(/\.(pdf|doc|docx|xlsx|csv)$/i)) {
                uploadedFiles.push(file);
            } else {
                showToast(`Skipped ${file.name}: Unsupported file type`, 'warning');
            }
        }
        
        updateFileList();
        analyzeFilesBtn.disabled = uploadedFiles.length === 0;
    }
    
    function updateFileList() {
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = '';
        
        if (uploadedFiles.length === 0) {
            fileList.innerHTML = '<p class="no-files">No files uploaded yet</p>';
            return;
        }
        
        uploadedFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            const icon = file.type.includes('pdf') ? 'fa-file-pdf' :
                        file.type.includes('word') ? 'fa-file-word' :
                        file.type.includes('excel') || file.type.includes('csv') ? 'fa-file-excel' :
                        'fa-file';
            
            const size = formatFileSize(file.size);
            
            fileItem.innerHTML = `
                <div class="file-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${size}</div>
                </div>
                <button class="btn-secondary remove-file" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            fileList.appendChild(fileItem);
        });
        
        // Add remove file event listeners
        document.querySelectorAll('.remove-file').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                uploadedFiles.splice(index, 1);
                updateFileList();
                analyzeFilesBtn.disabled = uploadedFiles.length === 0;
                showToast('File removed', 'info');
            });
        });
    }
    
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Processing Functions
    async function generateReportsFromDatabase(credentials) {
        isProcessing = true;
        
        // Show processing section
        processingSection.style.display = 'block';
        processingMessage.textContent = 'Connecting to database...';
        progressFill.style.width = '25%';
        updateProcessingStep(0);
        
        // Simulate database connection
        await delay(1500);
        processingMessage.textContent = 'Extracting sales data...';
        progressFill.style.width = '50%';
        updateProcessingStep(1);
        
        await delay(2000);
        processingMessage.textContent = 'Analyzing sales trends...';
        progressFill.style.width = '75%';
        updateProcessingStep(2);
        
        await delay(1500);
        processingMessage.textContent = 'Generating reports and visualizations...';
        progressFill.style.width = '100%';
        updateProcessingStep(3);
        
        await delay(1000);
        
        // Hide processing, show results
        processingSection.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Generate the dashboard
        generateDashboard();
        
        isProcessing = false;
        showToast(`Sales reports generated from ${credentials.database}`, 'success');
    }
    
    async function generateReportsFromFiles() {
        isProcessing = true;
        
        processingSection.style.display = 'block';
        processingMessage.textContent = 'Processing uploaded files...';
        progressFill.style.width = '25%';
        updateProcessingStep(0);
        
        // Simulate file processing
        await delay(2000);
        processingMessage.textContent = 'Extracting data from documents...';
        progressFill.style.width = '50%';
        updateProcessingStep(1);
        
        await delay(2500);
        processingMessage.textContent = 'Analyzing extracted sales data...';
        progressFill.style.width = '75%';
        updateProcessingStep(2);
        
        await delay(2000);
        processingMessage.textContent = 'Creating visualizations...';
        progressFill.style.width = '100%';
        updateProcessingStep(3);
        
        await delay(1000);
        
        processingSection.style.display = 'none';
        resultsSection.style.display = 'block';
        
        generateDashboard();
        
        isProcessing = false;
        showToast(`Reports generated from ${uploadedFiles.length} file(s)`, 'success');
    }
    
    // Dashboard Generation
    function generateDashboard() {
        createMetricsCards();
        createCharts();
        generateNewSummary();
        populateSalesTable();
        
        // Smooth scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function createMetricsCards() {
        const metrics = salesData.metrics;
        const regions = salesData.salesByRegion;
        
        const metricsHTML = `
            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">Total Sales</div>
                    <div class="metric-icon" style="background-color: #E6E6FA;">
                        <i class="fas fa-dollar-sign" style="color: #333366;"></i>
                    </div>
                </div>
                <div class="metric-value">$${(metrics.totalSales / 1000000).toFixed(2)}M</div>
                <div class="metric-change positive">
                    <i class="fas fa-arrow-up"></i> ${metrics.yearOverYearGrowth}% YoY Growth
                </div>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">Average Order Value</div>
                    <div class="metric-icon" style="background-color: #98FF98;">
                        <i class="fas fa-shopping-cart" style="color: #333366;"></i>
                    </div>
                </div>
                <div class="metric-value">$${metrics.averageOrderValue}</div>
                <div class="metric-change positive">
                    <i class="fas fa-arrow-up"></i> ${metrics.monthOverMonthGrowth}% MoM Growth
                </div>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">Total Orders</div>
                    <div class="metric-icon" style="background-color: #FFDAB9;">
                        <i class="fas fa-clipboard-list" style="color: #333366;"></i>
                    </div>
                </div>
                <div class="metric-value">${metrics.totalOrders.toLocaleString()}</div>
                <div class="metric-change positive">
                    <i class="fas fa-check-circle"></i> ${metrics.conversionRate}% Conversion
                </div>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <div class="metric-title">Top Product</div>
                    <div class="metric-icon" style="background-color: #B0E0E6;">
                        <i class="fas fa-crown" style="color: #333366;"></i>
                    </div>
                </div>
                <div class="metric-value">${metrics.topProduct}</div>
                <div class="metric-change">
                    <i class="fas fa-chart-line"></i> ${regions[0].growth}% Top Region Growth
                </div>
            </div>
        `;
        
        metricsGrid.innerHTML = metricsHTML;
    }
    
    function createCharts() {
        // Destroy existing charts if they exist
        if (monthlyChart) monthlyChart.destroy();
        if (productsChart) productsChart.destroy();
        
        // Monthly Sales Chart
        const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
        monthlyChart = new Chart(monthlyCtx, {
            type: 'bar',
            data: {
                labels: salesData.monthlySales.map(item => item.month),
                datasets: [
                    {
                        label: 'Actual Sales',
                        data: salesData.monthlySales.map(item => item.sales),
                        backgroundColor: '#E6E6FA',
                        borderColor: '#333366',
                        borderWidth: 1
                    },
                    {
                        label: 'Sales Target',
                        data: salesData.monthlySales.map(item => item.target),
                        type: 'line',
                        borderColor: '#98FF98',
                        borderWidth: 3,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Monthly Sales Performance'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    }
                }
            }
        });
        
        // Products Chart
        const productsCtx = document.getElementById('productsChart').getContext('2d');
        productsChart = new Chart(productsCtx, {
            type: 'doughnut',
            data: {
                labels: salesData.topProducts.map(item => item.product),
                datasets: [{
                    data: salesData.topProducts.map(item => item.sales),
                    backgroundColor: [
                        '#E6E6FA', '#98FF98', '#FFDAB9', '#B0E0E6',
                        '#C8A2C8', '#FFB6C1', '#87CEEB', '#98FB98'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Sales by Product'
                    }
                }
            }
        });
    }
    
    function generateNewSummary() {
        currentSummaryIndex = (currentSummaryIndex + 1) % salesData.summaries.length;
        summaryContent.textContent = salesData.summaries[currentSummaryIndex];
    }
    
    function populateSalesTable() {
        const records = salesData.salesRecords;
        let tableHTML = '';
        
        records.forEach(record => {
            const statusClass = record.status === 'Completed' ? 'status-success' : 
                              record.status === 'Pending' ? 'status-warning' : 'status-danger';
            
            tableHTML += `
                <tr>
                    <td>${record.date}</td>
                    <td>${record.product}</td>
                    <td>${record.region}</td>
                    <td>$${record.amount.toLocaleString()}</td>
                    <td>${record.quantity}</td>
                    <td class="${statusClass}">${record.status}</td>
                </tr>
            `;
        });
        
        salesTableBody.innerHTML = tableHTML;
        rowCount.textContent = records.length;
    }
    
    function handleExport(format) {
        let message = '';
        
        switch(format) {
            case 'pdf':
                message = 'PDF report generation started. Download will begin shortly.';
                break;
            case 'excel':
                message = 'Exporting sales data to Excel. Your file will download in a moment.';
                break;
            case 'email':
                message = 'Sales summary has been prepared for email. Check your drafts folder.';
                break;
            case 'presentation':
                message = 'PowerPoint presentation created with charts and insights.';
                break;
        }
        
        showToast(message, 'success');
        
        // Simulate export processing
        setTimeout(() => {
            showToast(`${format.toUpperCase()} export completed successfully!`, 'success');
        }, 2000);
    }
    
    // UI Helper Functions
    function setProcessingState(processing, message = '') {
        isProcessing = processing;
        if (message) {
            processingMessage.textContent = message;
        }
        
        // Disable/enable buttons during processing
        const buttons = [testConnectionBtn, generateReportsBtn, analyzeFilesBtn];
        buttons.forEach(btn => {
            if (btn) btn.disabled = processing;
        });
    }
    
    function updateProcessingStep(stepIndex) {
        processingSteps.forEach((step, index) => {
            step.classList.remove('active');
            const icon = step.querySelector('i');
            if (index === stepIndex) {
                step.classList.add('active');
                icon.className = 'fas fa-spinner fa-spin';
            } else if (index < stepIndex) {
                icon.className = 'fas fa-check';
            } else {
                icon.className = 'fas fa-circle';
            }
        });
    }
    
    function showToast(message, type = 'info') {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        
        let icon = 'info-circle';
        if (type === 'success') icon = 'check-circle';
        if (type === 'error') icon = 'exclamation-circle';
        if (type === 'warning') icon = 'exclamation-triangle';
        
        toast.innerHTML = `
            <i class="fas fa-${icon}" style="color: ${type === 'success' ? '#77DD77' : type === 'error' ? '#FF6961' : type === 'warning' ? '#FFB347' : '#B0E0E6'}"></i>
            <div class="toast-content">
                <h4>${type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <p>${message}</p>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Hide after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Initialize with a sample summary
    summaryContent.textContent = salesData.summaries[0];
});