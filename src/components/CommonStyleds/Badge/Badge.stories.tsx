import { Story, Meta } from '@storybook/react';

import Badge from '.';

export default {
    title: 'Badge',
    component: Badge
} as Meta;

const Template: Story = (args) => <Badge {...args} />;

export const BadgeColor = Template.bind({});
BadgeColor.args = {
    color: '#403F6F',
    children: 'Text'
};

