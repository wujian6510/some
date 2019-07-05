import React, { Component } from 'react';
import classnames from 'classnames';

export default class PagePanel extends Component {
  renderHead = (title, extra) => {
    if (
      (typeof title === 'string' || React.isValidElement(title)) ||
      (typeof extra === 'string' || React.isValidElement(extra))
    ) {
      return (
        <div className="ui-panel-head">
          {
            typeof title === 'string' ? (
              <div className="ui-panel-title">{title}</div>
            ) : title
          }
          {
            typeof extra === 'string' ? (
              <div className="ui-panel-extra">{extra}</div>
            ) : extra
          }
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      title, extra, footer, children, className, size,
    } = this.props;
    return (
      <div className={classnames('ui-panel', typeof size === 'string' && size, className)}>
        {this.renderHead(title, extra)}
        {children ?
          (
            <div className="ui-panel-body">
              {
                children
              }
            </div>
          ) : null
        }
        {
          (typeof footer === 'string' || React.isValidElement(footer)) && <div className="ui-panel-footer">{footer}</div>
        }
      </div>
    );
  }
}
