import highchartsconfig from './HighchartsConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContent} from "../App/AppProvider";
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);


export default function() {
    return (
        <AppContent.Consumer >
            { ({historical, changeChartSelect}) =>
                <Tile>
                    <ChartSelect
                        defaultValue={"months"}
                        onChange={e => changeChartSelect(e.target.value)}
                    >
                        <option value='days'>Days</option>
                        <option value='weeks'>Weeks</option>
                        <option value='months'>Months</option>
                    </ChartSelect>
                    {historical ? <ReactHighcharts config={highchartsconfig(historical)}/>
                    : <div>Loading Chart Data</div>
                    }
                </Tile>
            }

        </AppContent.Consumer>
    )
}