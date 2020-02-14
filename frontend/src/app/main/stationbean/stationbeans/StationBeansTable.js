import React, { useEffect, useState } from 'react';
import { FuseScrollbars, FuseLoading } from '@fuse';
import { withRouter} from 'react-router-dom';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import columns from './StationBeansHead'
function StationBeansTable(props)
{
    const dispatch = useDispatch();
    const stationbeans = useSelector(({stationBeanApp}) => stationBeanApp.stationbeans.data);
    const isLoading = useSelector(({stationBeanApp}) => stationBeanApp.stationbeans.isLoading);
    const isLoaded = useSelector(({stationBeanApp}) => stationBeanApp.stationbeans.isLoaded);
    const recordsTotal = useSelector(({stationBeanApp}) => stationBeanApp.stationbeans.recordsTotal);
    let [data, setData] = useState(stationbeans);
    const [page, setPage] = useState(0);
    const options = {
        filter: true,
        filterType: 'dropdown',
        pagination: true,
        search: true,
        responsive: "scrollFullHeight",
        serverSide: false,
        rowsPerPageOptions: [10, 50, 200],
        count: recordsTotal,
        page: page,
        selectableRowsHeader: false,
        selectableRows: "none",
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
        onTableChange: (action, tableState) => {
            switch (action) {
                case 'changePage':
                    setPage(tableState.page);
                    break;
                case 'changeRowsPerPage':
                    setPage(0);
                    break;
                default:
                    break;
            }
        },
        onColumnSortChange: (changedColumn, direction) => {
        },
        onColumnViewChange: (changedColumn, action) => {
        },
        onRowClick: (rowData, rowState) => {
        },
        onFilterDialogOpen: () => {
        },
        onFilterDialogClose: () => {
        },
        onFilterChange: (column, filterList, type) => {
        },
    };

    useEffect(() => {
        dispatch(Actions.startGetStationBeans());
        dispatch(Actions.getStationBeans());
    }, [dispatch]);

    useEffect(() => {
        setData(stationbeans)
    }, [stationbeans]);

    if (!(!isLoading && isLoaded)) {
        return <FuseLoading />;
    }

    return (
        <div className="w-full flex flex-col">
            <FuseScrollbars className="flex-grow overflow-x-auto row-hover-pointer">
                <MUIDataTable
                    title={""}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </FuseScrollbars>
        </div>
    );
}

export default withRouter(StationBeansTable);
