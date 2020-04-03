

import {shallow,mount,render, ShallowWrapper} from 'enzyme';
import FormPage from '../Form.react';

describe('FormPage shallow render', () => {
  const setup = (): {props: object; wrapper: ShallowWrapper} => {
    // 模拟 props
    const props = {
      // Jest 提供的mock 函数
      items: [],
      actions: {}
    };

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    //@ts-ignore
    const wrapper = shallow(FormPage,props);
    return {
      props,
      wrapper
    };
  };

  const { wrapper, props } = setup();
  it('FormPage render initial', (done) => {
    expect(wrapper.instance().render()).toBe(null)
    done()
  })

  it('formPage saveFormRef',(done)=>{
    const form = {}
    wrapper.instance().saveFormRef(form)
    expect(wrapper.instance().form).toBe(form)
    done()
  })

  it('FormPage onSubmit handleCancel', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleCancel=jest.fn()
    wrapper.instance().onSubmit('handleCancel')
    expect(wrapper.instance().handleCancel.mock.calls.length).toBe(1)
    done()
  })


  it('FormPage onSubmit handleSubmit validateFieldsAndScroll error', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleSubmit=jest.fn()
    wrapper.instance().onSubmit('handleSubmit')
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls[0][1].apply(wrapper.instance(),[true,{a:1}])).toBe(undefined)
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls.length).toBe(1)
    done()
  })

  it('FormPage onSubmit handleSubmit validateFieldsAndScroll pass validate', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleSubmit=jest.fn()
    wrapper.instance().onSubmit('handleSubmit')
    wrapper.instance().form.validateFieldsAndScroll.mock.calls[0][1].apply(wrapper.instance(),[undefined,{a:1}])
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls.length).toBe(1)
    expect(wrapper.instance().handleSubmit.mock.calls.length).toBe(1)
    done()
  })
})