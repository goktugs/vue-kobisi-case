import AppModal from '@/components/Card/AppModal.vue';
import AppCardItem from '@/components/Card/AppCardItem.vue';

import { mount } from '@vue/test-utils';

describe('It tests modal', () => {
  test('Is modal visible when button clicked?', async () => {
    const wrapper = mount(AppCardItem);
    await wrapper.find('button').trigger('click');

    const modal = wrapper.getComponent(AppModal);

    expect(modal.isVisible()).toBe(true);
  });
});
