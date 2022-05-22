/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    controlSRC: ComponentFramework.PropertyTypes.StringProperty;
    controlSRCDOC: ComponentFramework.PropertyTypes.StringProperty;
    controlWidth: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    controlHeight: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    controlAllow: ComponentFramework.PropertyTypes.StringProperty;
    controlAllowPaymentRequest: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    controlAllowfullScreen: ComponentFramework.PropertyTypes.TwoOptionsProperty;
}
export interface IOutputs {
    controlSRC?: string;
    controlSRCDOC?: string;
    controlWidth?: number;
    controlHeight?: number;
    controlAllow?: string;
    controlAllowPaymentRequest?: boolean;
    controlAllowfullScreen?: boolean;
}
