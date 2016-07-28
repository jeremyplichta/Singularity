import React, { PropTypes } from 'react';
import { Panel, ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';

export const DeployState = (props) => {
  return (
    <span className="deploy-state" data-state={props.state || 'PENDING'}>
        {props.state}
    </span>
  );
};

DeployState.propTypes = {
  state: PropTypes.string
};

export const InfoBox = (props) => {
  return (
    <li className="col-sm-6 col-md-3">
        <div>
            <h4>{props.name}<a className={classNames(props.copyableClassName, 'copy-btn')} data-clipboard-text={props.value}>Copy</a></h4>
            <p>{props.value}</p>
        </div>
    </li>
  );
};

InfoBox.propTypes = {
  name: PropTypes.string,
  copyableClassName: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
};

export const UsageInfo = (props) => {
  return (
    <Panel header={props.title}>
      <ProgressBar active={true} bsStyle={props.style} max={props.total} now={props.used} />
      <span>{props.children}</span>
    </Panel>
  );
};

UsageInfo.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
  total: PropTypes.number,
  used: PropTypes.number,
  children: PropTypes.node
};
