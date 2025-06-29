import "./Header.css";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import type { NavItemsProps } from "../types/NavItemsProps";

type EditableTextKey = "heading" | "subtitle" | "paragraph";

const Header = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("var(--primary-text)");

  const [texts, setTexts] = useState({
    heading: "Promote your New App !",
    subtitle: "new software in the app store",
    paragraph:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper.",
    headerBtn: "Buy Now",
    headerImg: "./images/image_600px_1.png"
  });

  const [textStyles, setTextStyles] = useState<Record<EditableTextKey, {
    color: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    fontStyle: string;
  }>>({
    heading: { color: "#fff", fontSize: "32px", lineHeight: "40px", fontWeight: "700", fontStyle: "normal" },
    subtitle: { color: "var(--primary)", fontSize: "15px", lineHeight: "40px", fontWeight: "600", fontStyle: "normal" },
    paragraph: { color: "#eee", fontSize: "16px", lineHeight: "24px", fontWeight: "normal", fontStyle: "normal" },
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleEditClick = (field: string) => {
    setSelected(field);
    if (field === "background") {
      setEditedText(backgroundColor)
    } else {
      setEditedText(texts[field as keyof typeof texts]);
    }

  };

  const handleSave = () => {
    if (selected) {
      if (selected === "background") {
        setBackgroundColor(editedText);
      } else {
        setTexts((prev) => ({
          ...prev,
          [selected]: editedText,
        }));
        setSelected(null);
      }
    }
  };

  const handleClose = () => {
    setSelected(null);
  }


  const navItems: NavItemsProps[] = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
  ]

  return (
    <header style={{ backgroundColor }} onClick={(e) => {
      const target = e.target as HTMLElement;

      const clickedInsideEditor =
        target.closest(".editable") ||
        target.closest(".editorSidebar") ||
        target.closest(".promoteBtn");

      if (!clickedInsideEditor) {
        handleEditClick("background");
      }
    }}>
      <nav className="nav">
        <ul className="navMenu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="navLink white">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="logo">
          <a href="#">
            <img src="./images/logo.png" alt="Logo" className="hover" />
          </a>
        </div>
        <div className="none">
          <a href="#" className="navLink primary">Get it Now</a>
        </div>
      </nav>
      <div className="promote">
        <div className={`editable ${selected === "heading" ? "selected" : ""}`} onClick={() => handleEditClick("heading")}>
          <h2 className="white" style={textStyles.heading}>
            <span className="light">
              {texts.heading.split(" ").slice(0, 2).join(" ")}
            </span>{" "}
            {texts.heading.split(" ").slice(2).join(" ")}
          </h2>
        </div>

        <div className={`editable ${selected === "subtitle" ? "selected" : ""}`} onClick={() => handleEditClick("subtitle")}>
          <span className="subtitle" style={textStyles.subtitle}>{texts.subtitle}</span>
        </div>

        <div className={`editable ${selected === "paragraph" ? "selected" : ""}`} onClick={() => handleEditClick("paragraph")}>
          <p className="paragraph white" style={textStyles.paragraph} >{texts.paragraph}</p>
        </div>

        <div className="promoteBtn" onClick={() => handleEditClick("headerBtn")}>
          <a href="#">
            <span className="primaryBtn">{texts.headerBtn}</span>
          </a>
        </div>
      </div>

      <img src={texts.headerImg} alt="PromoteImg" onClick={() => handleEditClick("headerImg")} className={`editable ${selected === "headerImg" ? "selected" : ""}`} />

      {selected && (
        <div className="editorSidebar" ref={modalRef}>

          <div className="editorlTitle">
            <IoMdClose onClick={handleClose} />
            <h3>Editable Component</h3>
          </div>
          {selected === "paragraph" ? (
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : selected === "background" ? (
            <input
              type="text"
              placeholder="Set background"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          )}

          {["heading", "subtitle", "paragraph"].includes(selected) && (
            <>
              <div className="fontStyle">
                <button
                  type="button"
                  className={`styleBtn ${textStyles[selected as EditableTextKey].fontWeight === "bold" ? "active" : ""}`}
                  onClick={() =>
                    setTextStyles((prev) => ({
                      ...prev,
                      [selected as EditableTextKey]: {
                        ...prev[selected as EditableTextKey],
                        fontWeight:
                          prev[selected as EditableTextKey].fontWeight === "bold"
                            ? "normal"
                            : "bold",
                      },
                    }))
                  }
                >
                  B
                </button>
                <button
                  type="button"
                  className={`styleBtn ${textStyles[selected as EditableTextKey].fontStyle === "italic" ? "active" : ""}`}
                  onClick={() =>
                    setTextStyles((prev) => ({
                      ...prev,
                      [selected as EditableTextKey]: {
                        ...prev[selected as EditableTextKey],
                        fontStyle:
                          prev[selected as EditableTextKey].fontStyle === "italic"
                            ? "normal"
                            : "italic",
                      },
                    }))
                  }
                >
                  I
                </button>
              </div>
              <label>
                Font Size:
                <input
                  type="text"
                  value={textStyles[selected as EditableTextKey].fontSize}
                  onChange={(e) =>
                    setTextStyles((prev) => ({
                      ...prev,
                      [selected as EditableTextKey]: {
                        ...prev[selected as EditableTextKey],
                        fontSize: e.target.value,
                      },
                    }))
                  }
                />
              </label>
              <label>
                Line height:
                <input
                  type="text"
                  value={textStyles[selected as EditableTextKey].lineHeight}
                  onChange={(e) =>
                    setTextStyles((prev) => ({
                      ...prev,
                      [selected as EditableTextKey]: {
                        ...prev[selected as EditableTextKey],
                        lineHeight: e.target.value,
                      },
                    }))
                  }
                />
              </label>
              <label>
                Color:
                <input
                  type="color"
                  value={textStyles[selected as EditableTextKey].color}
                  onChange={(e) =>
                    setTextStyles((prev) => ({
                      ...prev,
                      [selected]: { ...prev[selected as EditableTextKey], color: e.target.value },
                    }))
                  }
                />
              </label>

            </>
          )}
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </header>
  );
}
export default Header;