'use client'

import { Mappa } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import styles from './uploader.module.css';
import useTable from '@/app/hooks/useTable';
import TableFooter from '@/app/api/TableFooter';
import { useRouter} from 'next/navigation'

const Uploader = ({rowsPerPage, terms, user, mapsFolder}) => {
    const [mappe, setMappe] = useState<Mappa[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/uploader/list/`)
        .then(response => response.json())
        .then(mappe => setMappe(mappe))
    },[]);

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(mappe, page, rowsPerPage);

    const handleOpenEditor = (map: Mappa) => {
        router.push(`./editor/${map.nome}`);
    }

    return(
        <>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {terms.nome}
                            </th>
                            <th>
                                {terms.desccompleta}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {slice.map((item: Mappa) => (
                            <tr key={item.id} onClick={() => handleOpenEditor(item)}>
                                <td>{item.nome}</td>
                                <td>{item.desc_completa}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableFooter range={range} slice={slice} setPage={setPage} page={page} colspan={2}/>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )

}

export default Uploader;