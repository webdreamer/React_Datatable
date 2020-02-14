import React from 'react';

export const StationBeanAppConfig = {
    settings: {
        layout: {
            config: {
                footer        : {
                    display: false
                }
            }
        }
    },
    routes  : [
      
        {
            path     : '/',
            component: React.lazy(() => import('./stationbeans/StationBeans'))
        },
      
    ]
};
