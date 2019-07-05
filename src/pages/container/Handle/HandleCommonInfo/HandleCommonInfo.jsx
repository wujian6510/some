import React, { Component } from 'react';
import { PagePanel, PageCell } from '$pages/components/PageLayouts';
import { DrawerCreatContacts } from '$pages/container/Drawer';
import { switchAttrs } from '$pages/components/SwitchAttr';

const { Column } = PageCell;


export default class HandleCommonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commonAttr: props.commonAttr,
    };
  }

  render() {
    const { commonAttr } = this.state;
    const { commonAttrList } = commonAttr;
    return (
      <PagePanel title="公共信息" size="large">
        <PageCell>
          <Column>
            {switchAttrs(commonAttrList)}
          </Column>
        </PageCell>
      </PagePanel>
    );
  }
}
