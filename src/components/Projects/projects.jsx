function Projects() {
  return (
    <section className="portfolio fade-in-up" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Portfolio</h2>
          <p>Some of the data entry and administrative projects I have completed.</p>
        </div>

        <div className="portfolio-controls">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Data Entry</button>
          <button className="filter-btn">Web Research</button>
          <button className="filter-btn">Excel</button>
          <button className="filter-btn">Data Cleaning</button>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <h3>Data Entry Project</h3>
            <p>
              Entered and verified thousands of records with high accuracy using
              Microsoft Excel and Google Sheets.
            </p>
          </div>

          <div className="portfolio-card">
            <h3>Web Research</h3>
            <p>
              Collected business contact information from online sources and
              organized it into structured spreadsheets.
            </p>
          </div>

          <div className="portfolio-card">
            <h3>PDF to Excel Conversion</h3>
            <p>
              Converted scanned PDF documents into editable Excel files while
              maintaining formatting and data accuracy.
            </p>
          </div>

          <div className="portfolio-card">
            <h3>Data Cleaning</h3>
            <p>
              Removed duplicate records, corrected formatting issues, and
              prepared clean datasets for analysis.
            </p>
          </div>

          <div className="portfolio-card">
            <h3>Spreadsheet Management</h3>
            <p>
              Organized large datasets using formulas, filters, sorting, and
              formatting in Microsoft Excel and Google Sheets.
            </p>
          </div>

          <div className="portfolio-card">
            <h3>Database Update</h3>
            <p>
              Updated customer databases, verified records, and ensured
              consistent and accurate information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;