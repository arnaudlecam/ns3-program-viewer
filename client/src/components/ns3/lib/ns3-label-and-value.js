import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ns3.css";
import Ns3Label from "./ns3-label";

export default class Ns3LabelAndValue extends Component {
    render() {
        const labelClassName =
            this.props.enabled === undefined
                ? "nord-label nord-on"
                : this.props.enabled === true
                ? "nord-label nord-on"
                : "nord-label nord-off";

        const valueClassName =
            this.props.enabled === undefined
                ? "nord-value nord-on"
                : this.props.enabled === true
                ? "nord-value nord-on"
                : "nord-value nord-off";

        const upperCase = this.props.upperCase === false ? "nord-no-upper-case" : "nord-upper-case";

        const label = this.props.label === undefined ? "" : this.props.label + " ";
        let result;
        if (this.props.table === true) {
            result = (
                <>
                    <td className={"align-top " + upperCase + " " + labelClassName}>
                        <Ns3Label label={this.props.label} />
                    </td>

                    <td />

                    <td className={"align-top " + upperCase + " " + valueClassName}>
                        <span>{this.props.data.value}</span>
                    </td>
                </>
            );
        } else {
            result = (
                <>
                    <span className={upperCase + " " + labelClassName}>{label}</span>
                    <span className={upperCase + " " + valueClassName}>{this.props.data.value}</span>
                </>
            );
        }
        return <React.Fragment>{result}</React.Fragment>;
    }
}