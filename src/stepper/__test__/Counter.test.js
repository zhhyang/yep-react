import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import Stepper from '../index';

const renderHelper = props => {
  const testRenderer = TestRenderer.create(<Stepper {...props} />);
  const testRoot = testRenderer.root;
  const testInstance = testRenderer.getInstance();

  return {
    renderer: testRenderer,
    root: testRoot,
    instance: testInstance,
  };
};

const domRenderHelper = props => ReactTestUtils.renderIntoDocument(<Stepper {...props} />);

const onChangeMock = jest.fn();
const className = 'my-Stepper';
let testObj;
let testDOMInstance;

jest.useFakeTimers();

describe('Stepper', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
    testObj = renderHelper({
      min: 5,
      max: 100,
      className,
      onChange: onChangeMock,
      value: 10,
    });
  });

  describe('initial count', () => {
    it('should use min if provided value less than min', () => {
      testObj = renderHelper({
        min: 5,
        max: 100,
        className,
        onChange: onChangeMock,
        value: 1,
      });

      expect(testObj.instance.state.count).toBe(5);
    });

    it('should use max if provided value greater than max', () => {
      testObj = renderHelper({
        min: 5,
        max: 100,
        className,
        onChange: onChangeMock,
        value: 200,
      });

      expect(testObj.instance.state.count).toBe(100);
    });

    it('should use value if provided value between min and max', () => {
      testObj = renderHelper({
        min: 5,
        max: 100,
        className,
        onChange: onChangeMock,
        value: 50,
      });

      expect(testObj.instance.state.count).toBe(50);
    });

    it('should use min if no value provided', () => {
      testObj = renderHelper({
        min: 5,
        max: 100,
        className,
        onChange: onChangeMock,
      });

      expect(testObj.instance.state.count).toBe(5);
    });
  });

  describe('on props change', () => {
    it('should update count accourding to new props', () => {
      testObj.renderer.update(<Stepper min={20} max={100} value={10} />);
      expect(testObj.renderer.getInstance().state.count).toBe(20);

      testObj.renderer.update(<Stepper min={10} max={15} value={20} />);
      expect(testObj.renderer.getInstance().state.count).toBe(15);

      testObj.renderer.update(<Stepper min={10} max={15} value={12} />);
      expect(testObj.renderer.getInstance().state.count).toBe(12);
    });
  });

  describe('user action', () => {
    beforeEach(() => {
      testDOMInstance = domRenderHelper({
        min: 5,
        max: 100,
        className,
        onChange: onChangeMock,
        value: 10,
      });
    });

    describe('click add button', () => {
      it('should increase count by 1', () => {
        ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-add'));
        expect(testDOMInstance.state.count).toBe(11);
      });

      it('should call onChange callback', () => {
        ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-add'));
        expect(onChangeMock).toHaveBeenCalledWith(11);
      });
    });

    describe('click reduce button', () => {
      it('should reduce count by 1', () => {
        ReactTestUtils.Simulate.click(
          ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-reduce')
        );
        expect(testDOMInstance.state.count).toBe(9);
      });

      it('should call onChange callback', () => {
        ReactTestUtils.Simulate.click(
          ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-reduce')
        );
        expect(onChangeMock).toHaveBeenCalledWith(9);
      });
    });

    describe('input area blur', () => {
      it('should use min if current input is empty string', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.blur(inputEl, {
          target: {
            value: '',
          },
        });
        expect(testDOMInstance.state.count).toBe(5);
      });
    });

    describe('user modify input value', () => {
      it('should not allow input of non-numbric', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '10A',
          },
        });
        expect(testDOMInstance.state.count).toBe(10);

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '1...',
          },
        });
        expect(testDOMInstance.state.count).toBe(10);
      });

      it('should allow empty string', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '',
          },
        });
        expect(testDOMInstance.state.count).toBe('');
      });

      it('should update input value immediately', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '1000',
          },
        });
        expect(testDOMInstance.state.count).toBe(1000);
      });

      it('should check if input value is OK in a timer', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '1000',
          },
        });
        jest.runAllTimers();
        expect(testDOMInstance.state.count).toBe(100);
      });
    });
  });
});
