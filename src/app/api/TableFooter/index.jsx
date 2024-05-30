import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import styles from "./TableFooter.module.css";

const TableFooter = ({ range, setPage, page, slice, colspan }) => {
  const [searchPage, setSearchpage] = useState(page);
  const handleSearchpage = (e) => {
    setSearchpage(parseInt(e.target.value));
}
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
    setSearchpage(page);
  }, [slice, page, setPage]);
  return (
    <th colSpan={colspan} className={styles.tableFooter}>
      <button key='firstPage' className={styles.button} onClick={() => setPage(1)}>{`<<`}</button>
      {range.map((el, index) => {
        if (el >= (page - 2) && el <= (page + 2)){
          return(
            <button key={index} className={`${styles.button} ${page === el ? styles.activeButton : styles.inactiveButton}`} onClick={() => setPage(el)}>
              {el}
            </button>
          )
        }
      })} 
      <button key='lastPage' className={styles.button} onClick={() => setPage(range.length)}>{`>>`}</button>
      <input type='number' min={1} max={range.length} className={styles.searchPage} onChange={handleSearchpage} value={searchPage} />
      <button key='searchPage' onClick={() => setPage(searchPage)}>
        <FontAwesomeIcon icon={fas.faSearch} />
      </button>
    </th>
  );
};

export default TableFooter;