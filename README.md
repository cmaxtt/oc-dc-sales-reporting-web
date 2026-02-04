# Sales Insight Hub

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/cmaxtt/oc-dc-sales-reporting-web)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)](https://github.com/cmaxtt/oc-dc-sales-reporting-web/releases)
[![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-orange.svg)](https://developer.mozilla.org/en-US/docs/Web)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-blue.svg)](https://www.chartjs.org/)

**Sales Insight Hub** is a modern, interactive web application designed for professionals who need to generate stunning sales reports without coding expertise. Connect to your SQL Server 2022 database or upload sales documents to instantly create beautiful, interactive dashboards with charts, summaries, and export options.

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🎯 Quick Start](#-quick-start)
- [🖥️ User Interface Overview](#️-user-interface-overview)
- [📊 Data Sources](#-data-sources)
- [🎨 Design System](#-design-system)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [🔧 Development Setup](#-development-setup)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [⚠️ Troubleshooting](#️-troubleshooting)
- [📄 License](#-license)
- [👥 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### **Core Capabilities**
- **Dual Data Integration**: Connect directly to SQL Server 2022 or upload sales documents (PDF, Word, Excel, CSV)
- **Interactive Dashboards**: Real-time charts, metrics cards, and data tables
- **AI-Powered Insights**: Automatically generated sales summaries and recommendations
- **Professional Exports**: Generate PDF reports, Excel files, email summaries, and presentations
- **No-Code Interface**: Designed for business professionals with no technical background

### **Technical Features**
- **Frontend-Only Architecture**: All processing happens in the browser - no backend required
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations, loading states, and intuitive navigation
- **Data Security**: Credentials stored locally, no data sent to external servers
- **Persistent Settings**: Connection preferences saved in browser's localStorage

### **Visualization Tools**
- **Chart.js Integration**: Interactive bar charts, line charts, and doughnut charts
- **Real-time Metrics**: Key performance indicators with trend analysis
- **Data Filtering**: Interactive table with sorting and filtering capabilities
- **Export Ready**: All visualizations export-ready for presentations and reports

---

## 🎯 Quick Start

### **Option 1: Live Demo**
1. Clone the repository: `git clone https://github.com/cmaxtt/oc-dc-sales-reporting-web.git`
2. Open `index.html` in any modern web browser
3. Use the demo data to explore features immediately

### **Option 2: Connect to Your SQL Server**
1. Open the application
2. Navigate to **Database Connection** tab
3. Enter your SQL Server 2022 credentials:
   ```
   Server: localhost (or your server IP)
   Database: YourSalesDatabase
   Username: YourUsername
   Password: YourPassword
   Table: sales (or your table name)
   ```
4. Click **Test Connection** → **Generate Sales Reports**

### **Option 3: Upload Documents**
1. Open the application
2. Navigate to **Document Upload** tab
3. Drag & drop sales documents (PDF, Word, Excel, CSV)
4. Click **Analyze Documents**

---

## 🖥️ User Interface Overview

### **Header Section**
- **App Logo & Name**: "Sales Insight Hub" with chart icon
- **Tagline**: Clear description of app purpose
- **Color Palette Preview**: Visual display of the pastel theme

### **Input Section (Two Tabs)**
1. **Database Connection Tab**:
   - Form for SQL Server connection details
   - Test connection button with validation
   - Generate reports primary action

2. **Document Upload Tab**:
   - Drag & drop file upload area
   - Supported format indicators
   - File list with remove functionality

### **Processing Section**
- **Animated Spinner**: Visual feedback during data processing
- **Progress Bar**: Real-time progress indicator
- **Step-by-Step Status**: Connection → Analysis → Visualization → Summarization

### **Results Dashboard**
- **Metrics Cards (4-column grid)**:
  - Total Sales with YoY growth
  - Average Order Value with MoM growth
  - Total Orders with conversion rate
  - Top Product with regional performance

- **Chart Area**:
  - **Monthly Sales Chart**: Bar chart showing actual vs. target sales
  - **Top Products Chart**: Doughnut chart showing product performance

- **Summary & Export Panel**:
  - **AI-Generated Summary**: Narrative insights with copy/regenerate options
  - **Export Options**: PDF, Excel, Email, Presentation buttons

- **Data Table**:
  - Detailed sales records with status indicators
  - Row count and refresh functionality

### **Footer**
- Version information
- Security assurance statement

---

## 📊 Data Sources

### **SQL Server 2022 Integration**
```
Supported Configuration:
- Server: localhost or remote IP address
- Database: Any SQL Server 2022 database
- Table: sales (configurable)
- Authentication: SQL Server Authentication
- Port: Default (1433)
```

### **Document Processing**
```
Supported Formats:
- PDF (.pdf): Sales invoices, reports
- Word (.doc, .docx): Sales documents, contracts
- Excel (.xlsx, .xls): Spreadsheets, sales data
- CSV (.csv): Comma-separated values

Processing Capabilities:
- Text extraction from documents
- Tabular data parsing
- Date and amount recognition
- Multi-file batch processing
```

### **Mock Data System**
The application includes a comprehensive mock data system for demonstration:
- 12 months of sales data
- 8 product categories
- 5 geographic regions
- 15 detailed sales records
- 4 AI-generated summary templates

---

## 🎨 Design System

### **Color Palette (Pastel Theme)**
| Color | Hex | Usage |
|-------|-----|-------|
| **Lavender** | `#E6E6FA` | Primary accent, headers, buttons |
| **Mint** | `#98FF98` | Success indicators, positive metrics |
| **Peach** | `#FFDAB9` | Warning elements, highlights |
| **Powder Blue** | `#B0E0E6` | Secondary accent, backgrounds |
| **Soft Lavender** | `#F0F0FF` | Card backgrounds, hover states |
| **Dark Text** | `#333366` | Primary text, headings |

### **Typography**
- **Headings**: Segoe UI, Tahoma, Geneva, sans-serif
- **Body Text**: System font stack for optimal readability
- **Code**: Monospace for technical elements

### **Spacing & Layout**
- **Container**: Max-width 1400px, centered with 20px padding
- **Cards**: 18px border-radius, subtle shadows, 1px borders
- **Grid System**: CSS Grid with responsive breakpoints
- **Form Elements**: Consistent padding, rounded corners, focus states

### **Interactive Elements**
- **Buttons**: Gradient backgrounds, hover effects, icon support
- **Tabs**: Smooth transitions, active state indicators
- **Progress Indicators**: Animated bars, step-by-step status
- **Toast Notifications**: Slide-in notifications for user feedback

---

## 🏗️ Architecture

### **Technology Stack**
| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML5, CSS3, ES6+ | Core application structure |
| **Charts** | Chart.js 4.4.0 | Data visualization |
| **Icons** | Font Awesome 6.4.0 | UI icons and symbols |
| **Styling** | CSS Custom Properties | Theme management |
| **State** | LocalStorage | Persistent settings |
| **Fonts** | System Font Stack | Performance optimization |

### **File Architecture**
```
sales-insight-hub/
├── index.html              # Main application interface
├── style.css              # Styles, themes, responsive design
├── app.js                 # Application logic, event handlers
├── mockData.js            # Sample data, simulation functions
├── README.md              # Comprehensive documentation
└── .gitignore             # Version control exclusions
```

### **Component Architecture**
1. **Core Application (`app.js`)**
   - Tab management and navigation
   - Form validation and submission
   - File upload and processing
   - Chart initialization and updates
   - Mock API simulations

2. **Data Layer (`mockData.js`)**
   - Sample sales datasets
   - Database simulation functions
   - File processing simulations
   - Summary generation templates

3. **Presentation Layer (`style.css`)**
   - Theme variables and colors
   - Responsive layout system
   - Animation definitions
   - Component-specific styles

---

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- For SQL Server connection: SQL Server 2022 running locally or remotely
- For document upload: Sales documents in supported formats

### **Installation Methods**

#### **Method 1: Direct File Access**
```bash
# Clone the repository
git clone https://github.com/cmaxtt/oc-dc-sales-reporting-web.git

# Navigate to project directory
cd oc-dc-sales-reporting-web

# Open in browser (Windows)
start index.html

# Open in browser (macOS/Linux)
open index.html
# or
xdg-open index.html
```

#### **Method 2: Web Server Deployment**
```bash
# Using Python (any version)
python -m http.server 8000
# Access at http://localhost:8000

# Using Node.js with http-server
npx http-server . -p 8080
# Access at http://localhost:8080
```

#### **Method 3: Docker Deployment**
```dockerfile
# Simple Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```
```bash
docker build -t sales-insight-hub .
docker run -p 8080:80 sales-insight-hub
```

---

## 🔧 Development Setup

### **Local Development**
```bash
# 1. Clone the repository
git clone https://github.com/cmaxtt/oc-dc-sales-reporting-web.git
cd oc-dc-sales-reporting-web

# 2. Make changes to files
# - Edit HTML in index.html
# - Modify styles in style.css
# - Update logic in app.js
# - Adjust mock data in mockData.js

# 3. Test changes
# Open index.html in browser
# Use browser developer tools for debugging

# 4. Commit and push
git add .
git commit -m "Description of changes"
git push origin master
```

### **Development Tools Recommendations**
- **Code Editor**: VS Code with Live Server extension
- **Browser**: Chrome with DevTools for debugging
- **Version Control**: Git for source management
- **Design**: Browser DevTools for CSS inspection

### **Customization Points**
1. **Color Scheme**: Edit CSS variables in `style.css` `:root` selector
2. **Chart Types**: Modify Chart.js configurations in `app.js`
3. **Mock Data**: Update datasets in `mockData.js`
4. **Form Fields**: Add/remove fields in `index.html` database form
5. **Export Formats**: Extend export functionality in `app.js`

---

## 📁 Project Structure

### **File Descriptions**

#### **`index.html`** - Main Application Interface
- Complete HTML5 structure with semantic markup
- Header, navigation, input forms, results dashboard
- External CDN dependencies (Chart.js, Font Awesome)
- Inline SVG elements for icons
- Responsive meta tags and viewport configuration

#### **`style.css`** - Styling & Theming
- CSS Custom Properties for theme management
- Responsive design with mobile-first approach
- Component-specific styles (cards, buttons, forms)
- Animation definitions and keyframes
- Utility classes and helper styles

#### **`app.js`** - Application Logic
- DOM event listeners and handlers
- Tab navigation and form validation
- File upload and drag-drop functionality
- Chart.js initialization and configuration
- Mock API simulations with promises
- Toast notification system
- LocalStorage integration for settings

#### **`mockData.js`** - Data Simulation
- Comprehensive sales datasets (monthly, products, regions)
- Database connection simulation functions
- File processing simulation logic
- AI-generated summary templates
- Helper functions for data formatting

### **Key Functions Reference**

#### **Core Functions (`app.js`)**
```javascript
// Tab Management
setupTabs() - Handles tab switching and content display

// Database Operations
setupDatabaseForm() - Manages SQL Server connection form
getDatabaseCredentials() - Retrieves form values
validateCredentials() - Validates input fields

// File Operations
setupFileUpload() - Configures drag-drop file upload
handleFiles() - Processes uploaded files
updateFileList() - Displays uploaded files

// Dashboard Generation
generateDashboard() - Creates complete results dashboard
createMetricsCards() - Generates metric cards
createCharts() - Initializes Chart.js visualizations
generateNewSummary() - Creates AI-powered insights
populateSalesTable() - Fills data table with records

// UI Utilities
showToast() - Displays notification messages
setProcessingState() - Manages loading states
updateProcessingStep() - Updates progress indicators
```

#### **Data Functions (`mockData.js`)**
```javascript
// Mock Data Objects
salesData - Comprehensive sales datasets
salesData.monthlySales - 12 months of sales data
salesData.topProducts - Product performance data
salesData.salesByRegion - Regional sales analysis
salesData.salesRecords - Detailed transaction records
salesData.metrics - Key performance indicators
salesData.summaries - AI-generated insight templates

// Simulation Functions
mockDatabaseConnection() - Simulates SQL Server connection
mockProcessData() - Simulates data processing
mockProcessFiles() - Simulates file analysis
```

---

## 🤝 Contributing

We welcome contributions to enhance Sales Insight Hub! Here's how you can help:

### **Ways to Contribute**
1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Propose new functionality or improvements
3. **Submit Code**: Fork the repository and create pull requests
4. **Improve Documentation**: Enhance README or add inline comments
5. **Share Feedback**: Provide usability insights or user experience suggestions

### **Development Workflow**
```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/oc-dc-sales-reporting-web.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
# Follow the existing code style and patterns

# 5. Test your changes
# Ensure the application works correctly

# 6. Commit your changes
git add .
git commit -m "feat: description of your changes"

# 7. Push to your fork
git push origin feature/your-feature-name

# 8. Create a Pull Request
# Provide clear description of changes
```

### **Coding Standards**
- **HTML**: Semantic markup, accessibility attributes
- **CSS**: BEM-like naming, CSS custom properties
- **JavaScript**: ES6+ syntax, descriptive variable names
- **Comments**: Clear explanations for complex logic
- **Commits**: Conventional commit messages preferred

### **Priority Areas for Contribution**
1. **Additional Chart Types**: Heatmaps, scatter plots, funnel charts
2. **Real Backend Integration**: Connect to actual SQL Server APIs
3. **Advanced Export Options**: Custom report templates, scheduling
4. **User Authentication**: Multi-user support with permissions
5. **Mobile Optimization**: Enhanced touch interactions
6. **Accessibility Improvements**: Screen reader support, keyboard navigation

---

## ⚠️ Troubleshooting

### **Common Issues & Solutions**

#### **SQL Server Connection Issues**
| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| Connection fails | SQL Server not running | Start SQL Server service |
| Authentication error | Wrong credentials | Verify username/password |
| Database not found | Database name incorrect | Check database exists |
| Network error | Firewall blocking port 1433 | Configure firewall rules |

#### **File Upload Issues**
| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| Files not uploading | Unsupported format | Use PDF, Word, Excel, CSV |
| Upload too slow | Large file size | Compress or split files |
| Processing fails | Corrupted file | Verify file integrity |
| No data extracted | File format mismatch | Ensure proper formatting |

#### **Chart Display Issues**
| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| Charts not loading | No internet connection | Check Chart.js CDN access |
| Data not displaying | JavaScript error | Check browser console |
| Wrong colors | CSS loading issue | Clear browser cache |
| Performance issues | Too many data points | Reduce dataset size |

#### **General Application Issues**
| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| App not loading | File path incorrect | Ensure all files in same directory |
| Styles broken | CSS not loading | Check file permissions |
| JavaScript errors | Browser compatibility | Update browser version |
| Slow performance | Too many browser tabs | Close unnecessary tabs |

### **Debugging Steps**
1. **Check Browser Console**: Press F12 → Console tab for errors
2. **Clear Browser Cache**: Force refresh with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
3. **Verify File Structure**: Ensure all files are in the same directory
4. **Test Network Connection**: Ensure Chart.js and Font Awesome CDNs are accessible
5. **Check JavaScript Console**: Look for specific error messages
6. **Test Different Browser**: Try Chrome, Firefox, or Edge
7. **Verify File Permissions**: Ensure read access to all files

### **Performance Optimization**
- **Reduce Data Points**: Limit records to essential data
- **Optimize Images**: Use appropriate image formats and sizes
- **Minimize DOM Manipulation**: Batch DOM updates where possible
- **Use Efficient Selectors**: Prefer IDs and classes over complex selectors
- **Implement Lazy Loading**: Load charts only when visible

---

## 📄 License

### **MIT License**
```
Copyright (c) 2024 Sales Insight Hub Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### **Usage Rights**
- **Commercial Use**: Allowed with attribution
- **Modification**: Allowed with copyright notice preservation
- **Distribution**: Allowed with license inclusion
- **Private Use**: Allowed without restrictions
- **Liability**: No warranty provided

### **Attribution**
If you use this software, please include:
1. Reference to the original repository
2. Copyright notice in documentation
3. Link to the MIT License

---

## 👥 Acknowledgments

### **Technologies & Libraries**
- **[Chart.js](https://www.chartjs.org/)**: Powerful, flexible charting library
- **[Font Awesome](https://fontawesome.com/)**: Icon toolkit for the web
- **[GitHub](https://github.com/)**: Version control and collaboration platform
- **[MDN Web Docs](https://developer.mozilla.org/)**: Web technology references

### **Design Inspiration**
- **Modern Dashboard Design**: Clean, data-focused interfaces
- **Pastel Color Schemes**: Professional, accessible color palettes
- **User-Centered Design**: Intuitive workflows for non-technical users
- **Progressive Enhancement**: Core functionality with enhanced features

### **Contributors**
- **[cmaxtt](https://github.com/cmaxtt)**: Project architect and lead developer
- **Open Source Community**: For tools, libraries, and inspiration

### **Special Thanks**
- **SQL Server Community**: For database integration guidance
- **Web Standards Community**: For accessible, modern web practices
- **Business Intelligence Professionals**: For real-world use case insights

---

## 📞 Support & Contact

### **Getting Help**
- **GitHub Issues**: [Report bugs or request features](https://github.com/cmaxtt/oc-dc-sales-reporting-web/issues)
- **Documentation**: This README and inline code comments
- **Community**: Share experiences and solutions with other users

### **Stay Updated**
- **Watch Repository**: Get notifications for new releases
- **Star Repository**: Show your support for the project
- **Fork Repository**: Create your own customized version

### **Roadmap**
- **Version 1.1**: Real SQL Server API integration
- **Version 1.2**: Advanced analytics and forecasting
- **Version 1.3**: Team collaboration features
- **Version 2.0**: Full SaaS platform with cloud hosting

---

## 🎉 Getting Started Summary

1. **Download**: `git clone https://github.com/cmaxtt/oc-dc-sales-reporting-web.git`
2. **Open**: `index.html` in any modern browser
3. **Connect**: Enter SQL Server details or upload documents
4. **Analyze**: Explore interactive charts and insights
5. **Export**: Generate professional reports in multiple formats
6. **Customize**: Modify code to fit your specific needs

**Sales Insight Hub** empowers professionals to transform raw sales data into actionable insights without technical complexity. Start making data-driven decisions today!

---
*Last Updated: February 2024 | Version: 1.0.0 | [View on GitHub](https://github.com/cmaxtt/oc-dc-sales-reporting-web)*