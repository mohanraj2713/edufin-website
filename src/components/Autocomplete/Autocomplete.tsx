import { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";
import AutocompleteStyles from "./Autocomplete.module.css";
import DropdownIndicator from "../../assets/images/dropdown-indicator.svg";
import { SearchOption } from "../../types/index";

type AutocompleteProps = {
  name: string;
  id: string;
  testId?: string;
  placeholder?: string;
  options: SearchOption[];
  value?: SearchOption | null;
  canEdit?: boolean;
  onChange?: (_: string) => void;
  onSelect: (_: SearchOption) => void;
};

const Autocomplete = (props: AutocompleteProps) => {
  const {
    placeholder = "Select",
    options,
    value,
    id,
    name,
    testId,
    canEdit = true,
    onChange,
    onSelect,
  } = props;

  const [searchText, setSearchText] = useState<string>(value?.name || "");
  const [optionsList, setOptionsList] = useState<SearchOption[]>([
    { id: "", name: "No options found" },
  ]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Shows no options when API response is empty
     */
    if (options.length) {
      setOptionsList(options);
    } else {
      setOptionsList([{ id: "", name: "No options found" }]);
    }
  }, [options]);

  useEffect(() => {
    /**
     * Handles the user clicking outside of the dropdown
     */
    if (searchText === "") {
      setOptionsList(options);
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        autocompleteRef &&
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        if (
          canEdit &&
          searchText !== "" &&
          !options.some((option) => option.name === searchText)
        ) {
          setSearchText("");
          onSelect({ id: "", name: "" });
        }
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, canEdit]);

  useEffect(() => {
    /**
     * Listen to value reset events
     */
    if (value) {
      setSearchText(value.name);
    } else {
      setSearchText("");
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (optionsList.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prevIndex) => {
          const nextIndex =
            prevIndex === null
              ? 0
              : Math.min(optionsList.length - 1, prevIndex + 1);
          return nextIndex;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prevIndex) => {
          const prevIndexValue =
            prevIndex === null
              ? optionsList.length - 1
              : Math.max(0, prevIndex - 1);
          return prevIndexValue;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex !== null && highlightedIndex >= 0) {
          handleOptionClick(optionsList[highlightedIndex]);
        }
        break;
      default:
        break;
    }
  };

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchText(value);

    if (onChange) {
      onChange(value);
    }

    if (options.length) {
      const matcher = new RegExp(value.toLowerCase(), "i");
      const searchResults = options.filter((_v: SearchOption) => {
        return matcher.test(_v.name.toLowerCase());
      });
      if (searchResults.length) {
        setOptionsList(searchResults);
      } else {
        setOptionsList([{ id: "", name: "No options found" }]);
      }
    } else {
      setOptionsList([{ id: "", name: "No options found" }]);
    }

    setIsDropdownVisible(true);
  };

  const handleOptionClick = (option: SearchOption) => {
    if (option.id !== "") {
      setSearchText(option.name);
      onSelect(option);
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (highlightedIndex !== null && optionsContainerRef.current) {
      const highlightedElement = optionsContainerRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      highlightedElement?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  return (
    <div
      ref={autocompleteRef}
      className={AutocompleteStyles["autocomplete-container"]}
      data-testid={testId}
    >
      <input
        type="text"
        name={name}
        id={id}
        value={!canEdit ? value?.name : searchText}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsDropdownVisible(true)}
        placeholder={placeholder}
        className="form-control"
        autoComplete="off"
        role={isDropdownVisible ? "textbox" : "button"}
      />

      <div
        className={AutocompleteStyles["dropdown-indicator"]}
        onClick={() => setIsDropdownVisible(true)}
      >
        <Image src={DropdownIndicator} alt="dropdown-indicator" />
      </div>

      <div
        ref={optionsContainerRef}
        className={`${!isDropdownVisible && "d-none"} 
        ${AutocompleteStyles["autocomplete"]}`}
      >
        {optionsList.length > 0 &&
          optionsList.map((_v, _i) => (
            <div
              key={_i}
              className={`${AutocompleteStyles["autocomplete-item"]}  
                ${highlightedIndex === _i && "bg-light"}`}
              onClick={() => handleOptionClick(_v)}
              data-testid={`autocomplete-${name}-item-${_i}`}
            >
              {_v.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Autocomplete;
