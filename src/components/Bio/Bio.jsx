import "./bio.css";

function Bio() {
  return (
    <section className="about fade-in-up" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            Dedicated Data Entry Specialist delivering accurate, organized, and
            efficient data management solutions.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              <span>Data</span> <span>Entry</span> <span>Specialist</span>
            </h3>

            <p>
              I am a dedicated Data Entry Specialist focused on delivering
              accurate, organized, and error-free data solutions. With excellent
              typing speed and strong attention to detail, I efficiently handle
              large volumes of data while maintaining the highest standards of
              accuracy and quality. My goal is to help businesses streamline
              their operations through reliable data management and organized
              workflows.
            </p>

            <div className="terminal-wrapper">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>

                <div className="terminal-content">
                  <p> Data Entry</p>
                  <p> Web Research</p>
                  <p> Data Cleaning & Formatting</p>
                  <p> Spreadsheet Management</p>
                  <p> Database Management</p>
                  <p> Document Conversion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <p>
              I specialize in data collection, spreadsheet management, web
              research, document conversion, and database organization. I am
              committed to delivering high-quality work on time while ensuring
              accuracy, confidentiality, and efficiency in every project.
            </p>

            <div className="about-info">
              <div className="info-item">
                <div>
                  <strong>Data Entry</strong>
                  <br />
                  <span>Fast & Accurate Typing</span>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Spreadsheets</strong>
                  <br />
                  <span>Microsoft Excel & Google Sheets</span>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Research</strong>
                  <br />
                  <span>Web Research & Data Collection</span>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Document Conversion</strong>
                  <br />
                  <span>PDF to Excel / Word</span>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Database</strong>
                  <br />
                  <span>Management & Data Verification</span>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Administrative</strong>
                  <br />
                  <span>Support & Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;