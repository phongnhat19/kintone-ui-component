import '../polyfill';
import Control, {ControlProps} from '../Control';
import '../../css/Alert.css';

export type AlertProps = ControlProps & {
  text?: string;
  type?: 'error' | 'success';
}

class Alert extends Control<AlertProps> {
  constructor(params?: AlertProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        text: '',
        type: 'error'
      }
    };
    if (params) {
      this._props = {...this._props, ...params};
      this._props.text = (params.text && typeof params.text === 'string') ? params.text : '';
    }
    // isDisabled always is setted false
    // When we update major version of ui-component, we should delete this prop
    this._props.isDisabled = false;

    this.element = document.createElement('div');
    this.element.className = this._getClassName();
    this.rerender(['text', 'type']);
  }

  rerender(changedAttr?: string[]) {
    super.rerender();

    if (!changedAttr) return;
    if (changedAttr.indexOf('text') !== -1) {
      this.element.innerHTML = this._props.text || '';
    }

    if (changedAttr.indexOf('type') !== -1) {
      this.element.className = this._getClassName();
    }
  }

  private _getClassName(): string {
    const className = [
      'kuc-alert',
      this._props.type === 'success' ? 'bg-success' : 'bg-danger'
    ];

    return className.join(' ');
  }

  setText(text: string): void {
    this._props.text = (typeof text === 'string') ? text : '';
    this.rerender(['text']);
  }


  setType(type: 'error' | 'success'): void {
    this._props.type = type;
    this.rerender(['type']);
  }

  disable(): void {
    // nothing to do
  }

  enable(): void {
    // nothing to do
  }
}

export default Alert;