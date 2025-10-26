import React, { useState, type KeyboardEvent } from "react";
import Tab from "./Tab";
import type { TabsProps } from "../../shared/types/Tabs";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  if (!tabs || tabs.length === 0) return null;

  const [activeId, setActiveId] = useState<string>(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) || tabs[0];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    const idx = tabs.findIndex((tab) => tab.id === activeId);

    if (event.key === "ArrowRight") {
      setActiveId(tabs[(idx + 1) % tabs.length].id);
    } else if (event.key === "ArrowLeft") {
      setActiveId(tabs[(idx - 1 + tabs.length) % tabs.length].id);
    }
  };

  return (
    <div className="tabs-component">
      <div onKeyDown={handleKeyDown} className="tabs-component_buttons" aria-label="Service Tabs">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            aria-selected={activeId === tab.id}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
            onClick={() => setActiveId(tab.id)}
            className={`tabs-component_button ${activeId === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}

      </div>
      <div className="tabs-component_tabs" id={`${activeTab.id}-panel`} aria-labelledby={`${activeTab.id}-tab`}>
        <Tab services={activeTab.services} />
      </div>
    </div>
  );
};

export default Tabs;
