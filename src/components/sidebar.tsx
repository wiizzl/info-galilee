"use client";

import config from "@/config.json";

export function SideBar() {
    return (
        <div>
            {config.link.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
}
