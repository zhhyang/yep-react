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
const onLessMock = jest.fn();
const onLessCallbackMock = jest.fn();
const onGreatMock = jest.fn();
const className = 'my-Stepper';
let testObj;
let testDOMInstance;

describe('Stepper', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
    onLessMock.mockReset();
    onLessCallbackMock.mockReset();
    onGreatMock.mockReset();
    testObj = renderHelper({
      min: 5,
      max: 10,
      className,
      onChange: onChangeMock,
    });
  });

  describe('initial count', () => {
    it('state count equal props min when initial', () => {
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
        max: 10,
        className,
        onChange: onChangeMock,
        onLess: onLessMock,
        onGreat: onGreatMock,
      });
    });

    describe('click add button', () => {
      it('should increase count by 1', () => {
        ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-add'));
        expect(testDOMInstance.state.count).toBe(6);
      });

      it('should call callback', () => {
        ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-add'));
        expect(onChangeMock).toHaveBeenCalledWith(6);
      });
    });

    describe('click reduce button', () => {
      it('should reduce count by 1', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '7',
          },
        });
        expect(testDOMInstance.state.count).toBe(7);

        ReactTestUtils.Simulate.click(
          ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-reduce')
        );
        expect(testDOMInstance.state.count).toBe(6);
      });

      it('should call callback', () => {
        ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'button-add'));
        expect(onChangeMock).toHaveBeenCalledWith(6);
      });
    });

    describe('input area blur', () => {
      it('should call onLess if current input is empty string', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '',
          },
        });
        ReactTestUtils.Simulate.blur(inputEl);
        expect(testDOMInstance.state.count).toBe(0);
        expect(onLessMock).toHaveBeenCalled();
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
        expect(testDOMInstance.state.count).toBe(5);

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '1...',
          },
        });
        expect(testDOMInstance.state.count).toBe(5);
      });

      it('count is zero when user input empty', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '',
          },
        });
        expect(testDOMInstance.state.count).toBe(0);
      });

      it('should update input value immediately', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '8',
          },
        });
        expect(testDOMInstance.state.count).toBe(8);
      });

      it('should call onGreat callback when user input value great than max', () => {
        const inputEl = ReactTestUtils.findRenderedDOMComponentWithClass(testDOMInstance, 'input-value');

        ReactTestUtils.Simulate.change(inputEl, {
          target: {
            value: '88',
          },
        });
        expect(testDOMInstance.state.count).toBe(10);
        expect(onGreatMock).toHaveBeenCalled();
      });
    });
  });
});
