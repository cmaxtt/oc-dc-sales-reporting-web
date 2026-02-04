# Sales Insight Hub

A modern, interactive web application for generating stunning sales reports from SQL Server databases or uploaded documents.

## What It Does

Sales Insight Hub connects to your local SQL Server 2022 database (or processes uploaded sales documents) and creates beautiful, interactive sales reports with charts, summaries, and export options—all without any coding required.

## Main Benefits

- **Professional Reporting**: Generate boardroom-ready sales reports in minutes
- **No Coding Needed**: Designed for office professionals, not developers
- **Multiple Data Sources**: Connect to SQL Server or upload PDF/Word/Excel files
- **Interactive Dashboards**: Visualize data with charts, metrics, and summaries
- **Export Options**: Download reports as PDF, Excel, or email summaries

## How to Use

### Option 1: Connect to SQL Server
1. Open `index.html` in your web browser
2. Click the "Database Connection" tab
3. Enter your SQL Server details:
   - Server: `localhost` (or your server address)
   - Database: Your sales database name
   - Username & Password: Your SQL Server credentials
   - Table: `sales` (or your sales table name)
4. Click "Test Connection" to verify
5. Click "Generate Sales Reports" to create your dashboard

### Option 2: Upload Sales Documents
1. Open `index.html` in your web browser
2. Click the "Document Upload" tab
3. Drag & drop your sales documents (PDF, Word, Excel, CSV)
4. Click "Analyze Documents" to process and generate reports

### Using the Dashboard
- **Metrics Cards**: View key sales metrics at a glance
- **Interactive Charts**: Click chart elements for details
- **Sales Summary**: Read AI-generated insights about your data
- **Data Table**: Browse individual sales records
- **Export Options**: Download reports in multiple formats

## Color Scheme

The app uses a professional pastel color palette:
- **Lavender** (#E6E6FA): Primary accent
- **Mint** (#98FF98): Success indicators
- **Peach** (#FFDAB9): Warning elements
- **Powder Blue** (#B0E0E6): Secondary accent

## Technical Details

### Frontend Only
- No backend code required
- All processing simulated in browser
- Data never leaves your computer
- Uses localStorage to save connection preferences

### Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Font Awesome for icons
- Responsive design for all devices

## Files Included

- `index.html` - Main application interface
- `style.css` - Pastel color scheme & responsive design
- `app.js` - Application logic & interactivity
- `mockData.js` - Sample sales data for demonstration
- `README.md` - This documentation

## Security Notes

- Database credentials are stored only in your browser's localStorage
- No data is sent to external servers
- File processing happens entirely in your browser
- You can clear saved credentials via browser settings

## Browser Compatibility

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

**Connection Failed?**
- Verify SQL Server is running on localhost
- Check your username and password
- Ensure the database and table exist

**Charts Not Loading?**
- Ensure you have internet access (Chart.js loads from CDN)
- Try refreshing the page

**File Upload Issues?**
- Supported formats: PDF, DOC, DOCX, XLSX, CSV
- Maximum file size: Browser-dependent (typically 50MB)

## Next Steps

1. **Customize Colors**: Edit `style.css` to match your brand
2. **Add Real Backend**: Connect to actual SQL Server API
3. **Expand Features**: Add more chart types or report templates
4. **Multi-User**: Add authentication for team use

## Need Help?

The app is designed to be intuitive, but if you encounter issues:
1. Check browser console for errors (F12 → Console)
2. Clear browser cache and reload
3. Ensure all files are in the same directory

---

**Sales Insight Hub v1.0**  
Designed for professionals who need sales insights without the complexity.