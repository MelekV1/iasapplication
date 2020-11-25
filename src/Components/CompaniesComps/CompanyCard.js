import React from 'react'
import "./StyleCompanies.css"
/*{Company:{title,description,posterUrl,field}} */


const CompanyCard = ({ Company }) => {
  return (
    <div className="card">
      <div className="additional">
        <div className="Company-card">
          <div className="ias-id center">IAS-ID : {Company.id}</div>
          <div className="company-title center">{Company.Name}</div>
          <img
            src={Company.LogoUrl}
            alt="company"
            width="150"
            className="center"
          />
        </div>

        <div className="more-info">
          <h1>{Company.Name}</h1>
          <div className="coords">
            <span>
              <b>Contacts :</b>
            </span>
            <br />
            <span>{Company.Phone}</span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Location :</b>
            </span>
            <br />
            <span>
              {Company.City}, {Company.Governerate}
            </span>
            <br />
            <span>{Company.Adress}</span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Mail :</b>
            </span>
            <br />
            <span>{Company.Mail}</span>
            <br />
          </div>

          <div className="coords">
            <span>
              <b>website :</b>
            </span>
            <br />
            <span>
              <a
                className="link"
                href={Company.Website}
                target="_blank"
                rel="noreferrer"
              >
                Check the website{" "}
              </a>
            </span>
            <br />
          </div>
          <div className="coords">
            <span>
              <b>Field</b>
            </span>
            <br />
            <span>{Company.Field}</span>
            <br />
          </div>
        </div>
      </div>

      <div className="general">
        <h1>{Company.Name}</h1>
        <p>{Company.Description}</p>
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
};

export default CompanyCard;

