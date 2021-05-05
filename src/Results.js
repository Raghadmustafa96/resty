import ReactJson from 'react-json-view';
import './App.scss';

function Results(props) {
    if (props.show) {

        return (
            <div id="content" className="content">
                <h2> Results API:</h2>
                <br />
                <ul>
                    <li>headers:<ReactJson id="pretty" src={props.data.headers} /></li>
                    <li>results:</li>
                    <li><ReactJson id="pretty" src={props.data.body} /></li>
                </ul>
            </div>
        );
    } else return props.data.error;
}
export default Results