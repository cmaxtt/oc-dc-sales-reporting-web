// Mock sales data for Sales Insight Hub
// This simulates data from a SQL Server database

window.salesData = {
    // Monthly sales data for the current year
    monthlySales: [
        { month: 'Jan', sales: 125000, target: 120000 },
        { month: 'Feb', sales: 145000, target: 135000 },
        { month: 'Mar', sales: 165000, target: 150000 },
        { month: 'Apr', sales: 155000, target: 160000 },
        { month: 'May', sales: 185000, target: 170000 },
        { month: 'Jun', sales: 195000, target: 180000 },
        { month: 'Jul', sales: 175000, target: 175000 },
        { month: 'Aug', sales: 205000, target: 190000 },
        { month: 'Sep', sales: 225000, target: 200000 },
        { month: 'Oct', sales: 245000, target: 210000 },
        { month: 'Nov', sales: 265000, target: 220000 },
        { month: 'Dec', sales: 285000, target: 230000 }
    ],
    
    // Top products by sales
    topProducts: [
        { product: 'Laptop Pro X1', sales: 425000, units: 850, category: 'Electronics' },
        { product: 'Office Chair Elite', sales: 285000, units: 950, category: 'Furniture' },
        { product: 'Monitor 32" 4K', sales: 195000, units: 650, category: 'Electronics' },
        { product: 'Desk Organizer Set', sales: 125000, units: 2500, category: 'Accessories' },
        { product: 'Wireless Keyboard', sales: 115000, units: 2300, category: 'Accessories' },
        { product: 'Noise Cancelling Headphones', sales: 185000, units: 370, category: 'Electronics' },
        { product: 'Ergonomic Mouse', sales: 95000, units: 1900, category: 'Accessories' },
        { product: 'Standing Desk', sales: 275000, units: 550, category: 'Furniture' }
    ],
    
    // Sales by region
    salesByRegion: [
        { region: 'North America', sales: 985000, growth: 12.5 },
        { region: 'Europe', sales: 745000, growth: 8.2 },
        { region: 'Asia Pacific', sales: 625000, growth: 15.8 },
        { region: 'Latin America', sales: 285000, growth: 5.4 },
        { region: 'Middle East', sales: 195000, growth: 10.2 }
    ],
    
    // Detailed sales records
    salesRecords: [
        { id: 1001, date: '2024-01-15', product: 'Laptop Pro X1', region: 'North America', amount: 2500, quantity: 1, status: 'Completed' },
        { id: 1002, date: '2024-01-18', product: 'Office Chair Elite', region: 'Europe', amount: 450, quantity: 3, status: 'Completed' },
        { id: 1003, date: '2024-01-22', product: 'Monitor 32" 4K', region: 'Asia Pacific', amount: 750, quantity: 2, status: 'Completed' },
        { id: 1004, date: '2024-02-05', product: 'Desk Organizer Set', region: 'North America', amount: 120, quantity: 4, status: 'Completed' },
        { id: 1005, date: '2024-02-12', product: 'Wireless Keyboard', region: 'Europe', amount: 85, quantity: 5, status: 'Completed' },
        { id: 1006, date: '2024-02-25', product: 'Noise Cancelling Headphones', region: 'North America', amount: 299, quantity: 3, status: 'Completed' },
        { id: 1007, date: '2024-03-08', product: 'Ergonomic Mouse', region: 'Asia Pacific', amount: 65, quantity: 8, status: 'Completed' },
        { id: 1008, date: '2024-03-15', product: 'Standing Desk', region: 'Europe', amount: 850, quantity: 2, status: 'Completed' },
        { id: 1009, date: '2024-03-22', product: 'Laptop Pro X1', region: 'Latin America', amount: 2500, quantity: 1, status: 'Pending' },
        { id: 1010, date: '2024-04-05', product: 'Office Chair Elite', region: 'Middle East', amount: 450, quantity: 2, status: 'Completed' },
        { id: 1011, date: '2024-04-18', product: 'Monitor 32" 4K', region: 'North America', amount: 750, quantity: 3, status: 'Completed' },
        { id: 1012, date: '2024-05-02', product: 'Desk Organizer Set', region: 'Europe', amount: 120, quantity: 6, status: 'Completed' },
        { id: 1013, date: '2024-05-15', product: 'Wireless Keyboard', region: 'Asia Pacific', amount: 85, quantity: 10, status: 'Completed' },
        { id: 1014, date: '2024-05-28', product: 'Noise Cancelling Headphones', region: 'North America', amount: 299, quantity: 4, status: 'Completed' },
        { id: 1015, date: '2024-06-10', product: 'Ergonomic Mouse', region: 'Europe', amount: 65, quantity: 12, status: 'Completed' }
    ],
    
    // Key metrics
    metrics: {
        totalSales: 2850000,
        averageOrderValue: 525,
        totalOrders: 5428,
        conversionRate: 4.8,
        yearOverYearGrowth: 15.2,
        monthOverMonthGrowth: 8.5,
        topProduct: 'Laptop Pro X1',
        topRegion: 'North America'
    },
    
    // Generated summaries
    summaries: [
        "Based on your sales data from January to December, total revenue reached $2.85M, representing a strong 15.2% year-over-year growth. The Laptop Pro X1 was your best-performing product, contributing $425K in sales. North America remains your strongest market with $985K in revenue and 12.5% growth.",
        "Your sales analysis shows consistent growth throughout the year, with December being the peak month at $285K in sales. Electronics category dominates with 52% of total revenue, while accessories show strong volume with high unit sales. Consider expanding your furniture line based on the 18% growth in that category.",
        "The data reveals excellent performance in Q4 with a 22% increase over Q3. Customer acquisition costs appear efficient with a 4.8% conversion rate. Recommendations: 1) Increase marketing in Asia Pacific (15.8% growth), 2) Bundle accessories with electronics, 3) Launch a Q1 promotion to maintain momentum.",
        "Sales trends indicate strong adoption of premium products with higher price points. The average order value of $525 suggests customers are buying multiple items. Office furniture shows particular promise with the Standing Desk and Office Chair Elite performing well in corporate markets."
    ]
};

// Mock database connection test function
window.mockDatabaseConnection = function(server, database, username, password, table) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate connection test
            if (server && database) {
                resolve({
                    success: true,
                    message: `Successfully connected to ${database} on ${server}`,
                    tables: ['sales', 'customers', 'products', 'regions', 'orders'],
                    sampleData: {
                        rowCount: 15284,
                        columns: ['id', 'date', 'product', 'region', 'amount', 'quantity', 'status']
                    }
                });
            } else {
                resolve({
                    success: false,
                    message: 'Connection failed. Please check your server and database details.'
                });
            }
        }, 1500);
    });
};

// Mock data processing function
window.mockProcessData = function(dataType) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: `Successfully processed ${dataType} data`,
                recordsProcessed: salesData.salesRecords.length,
                processingTime: '2.8 seconds',
                insightsFound: 24
            });
        }, 3000);
    });
};

// Mock file upload processing
window.mockProcessFiles = function(files) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: `Processed ${files.length} file(s)`,
                extractedData: {
                    totalSales: 1850000,
                    recordCount: 1245,
                    dateRange: '2023-01-01 to 2024-01-31'
                },
                files: files.map(file => ({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    recordsExtracted: Math.floor(Math.random() * 500) + 100
                }))
            });
        }, 4000);
    });
};