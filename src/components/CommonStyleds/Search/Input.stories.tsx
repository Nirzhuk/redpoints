import { Story, Meta } from '@storybook/react';

import Search, { SearchProps } from '.';

export default {
    title: 'Search',
    component: Search
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const SearchText = Template.bind({});
SearchText.args = {
    legend: 'Legend',
};
