import React from "react";
import type { Service } from "../../shared/types/Service";

const Tab: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <div className="tab">

      {services.map((service) => (
        <div key={service.id} className="tab_container">
          <h3 className="tab_container_title">{service.title}</h3>
          <p className="tab_container_short">{service.short}</p>

          {service.tech && (
            <div className="tab_container_tech">

              {service.tech.map((tech) => (
                <span key={tech} className="tab_container_tech_item">
                  {tech}
                </span>
              ))}

            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default Tab;
