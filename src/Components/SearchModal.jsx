import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchModal = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a search term");
      return;
    }
    alert(`Searching for: ${query}`);
  };

  return (
    <section className="form-box">
      <div className="container">
        {/* Bootstrap Modal */}
        <div className="modal fade" id="searchModal">
          <div
            className="modal-dialog modal-dialog-centered"
            style={{width: "100%"}}
          >
            <div className="modal-content search-modal-content p-3" style={{height: "auto"}}>
              <form className="input-group-custom" onSubmit={handleSearch}>
                <input
                  type="search"
                  placeholder="Search for Products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button className="search-btn" type="submit">
                  <FontAwesomeIcon icon={faSearch} className="fs-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
