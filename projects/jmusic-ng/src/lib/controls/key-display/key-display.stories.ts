import { KeyDisplayComponent } from './key-display.component';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<KeyDisplayComponent> = {
  component: KeyDisplayComponent,
};

export default meta;
type Story = StoryObj<KeyDisplayComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    props: {
      keyDef: {accidental: 1, count: 5}
    },
  }),
};
