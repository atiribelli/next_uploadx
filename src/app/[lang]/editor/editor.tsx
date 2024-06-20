'use client'

import { useEffect, useRef } from 'react';
import styles from './editor.module.css';
import Editor from './editor.class';
import trimSvg from '@/app/api/trimsvg';
//import Editor from '@/app/api/editor/Editor';

const Mapeditor = ({map, filename, terms, user}) => {
    const editContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (editContainerRef.current) {
        const editor = new Editor(editContainerRef.current);
        editor.configure('saveHandler', handleSaveMap);
        editor.configure('exportHandler', handleExportMap);
        editor.load(
          trimSvg(map)
        );
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);
  
    const handleSaveMap = (mapSvg: string) => {
      const saveRequest = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          svgMap: mapSvg,
          fileName: filename,
        })
      };
      console.log(saveRequest.body)
      fetch('/api/uploader/save', saveRequest)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
          // Handle data
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    const handleExportMap = (mapSvg: string) => {
      const link = document.createElement('a');
      const file = new Blob([mapSvg], {type: 'text/xml'});
      link.href = URL.createObjectURL(file);
      link.setAttribute(
        'download',
        `${filename}`,
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode?.removeChild(link);
    };
  
    return (
      <div ref={editContainerRef} className={styles.editContainer} />
    );
}
export default Mapeditor;