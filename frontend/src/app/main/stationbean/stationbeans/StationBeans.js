import React from 'react';
import { FusePageCarded } from '@fuse';
import withReducer from 'app/store/withReducer';
import StationBeansTable from './StationBeansTable';
import StationBeansHeader from './StationBeansHeader';
import reducer from '../store/reducers';

function StationBeans()
{
    return (
        <React.Fragment>
            <FusePageCarded
                classes={{
                    content: "flex",
                    header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <StationBeansHeader/>
                }
                content={
                    <StationBeansTable/>
                }
            />
        </React.Fragment>
    );
}

export default withReducer('stationBeanApp', reducer)(StationBeans);
