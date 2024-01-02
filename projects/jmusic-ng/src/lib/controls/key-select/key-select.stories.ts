import type { Meta, StoryObj } from '@storybook/angular';

import { KeySelectComponent } from './key-select.component';

const meta: Meta<KeySelectComponent> = {
  component: KeySelectComponent,
};

export default meta;
type Story = StoryObj<KeySelectComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    props: {
      selected: undefined
    },
  }),
};
