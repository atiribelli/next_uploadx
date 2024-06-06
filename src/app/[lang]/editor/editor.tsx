'use client'

import { useEffect, useRef } from 'react';
import styles from './editor.module.css';
import Editor from './editor.class';

const Mapeditor = ({map, terms, user}) => {
    const editContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (editContainerRef.current) {
        const editor = new Editor(editContainerRef.current);
        /* initialize the Editor */
        //editor.init()
        /* set the configuration */
        //editor.setConfig({
        //        allowInitialUserOverride: true,
        //        extensions: [],
        //        noDefaultExtensions: false,
        //        userExtensions: []
        //})

        editor.configure('saveHandler', logSvg);
        const svgContent = fetch("/vercel.svg")
            .then(response => response.text())
            .then(svgContent => editor.load(svgContent))
      }
    }, []);
  
    const logSvg = (content: string) => {
      console.log(content);
    };
  
    return (
      <div ref={editContainerRef} className={styles.editContainer} />
    );
}
export default Mapeditor;