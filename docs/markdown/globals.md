[**dry-ux**](README.md)

***

# dry-ux

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [Viewport](enumerations/Viewport.md) | Enum representing different viewport sizes. |

## Classes

| Class | Description |
| ------ | ------ |
| [Deferred](classes/Deferred.md) | A class representing a deferred promise. |
| [Element](classes/Element.md) | Class representing a generic DOM element with utility methods for manipulation and validation. |
| [ErrorBoundary](classes/ErrorBoundary.md) | A React component that acts as an error boundary to catch JavaScript errors anywhere in its child component tree. It displays a fallback UI when an error is caught. |
| [Loader](classes/Loader.md) | A singleton class that manages the display of a fullscreen loader spinner. |
| [StorageUtils](classes/StorageUtils.md) | Utility class for storage-related operations. |
| [Validation](classes/Validation.md) | Class representing form validation. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [IEnhancedProps](interfaces/IEnhancedProps.md) | Interface representing enhanced properties for an input field. |
| [ILogger](interfaces/ILogger.md) | Interface representing a logger with various logging methods. |
| [IUIUtilLoader](interfaces/IUIUtilLoader.md) | Represents a loader utility. |
| [IValidations](interfaces/IValidations.md) | Interface representing various validation rules for a field. |
| [IValueValidation](interfaces/IValueValidation.md) | Interface representing a value validation with an optional message. |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ButtonType](type-aliases/ButtonType.md) | Type alias for button types. |
| [Content](type-aliases/Content.md) | Type alias for content, which can be a JSX element or a string. |
| [DajaxiceFn](type-aliases/DajaxiceFn.md) | Represents a Dajaxice function. |
| [InputAttributes](type-aliases/InputAttributes.md) | Type alias for input attributes, extending HTML input, select, and textarea attributes. |
| [IValidation](type-aliases/IValidation.md) | Type alias for validation, which can be a boolean or a string. |
| [PopUp](type-aliases/PopUp.md) | Represents a PopUp with methods to control its visibility and content. |
| [PopUpAction](type-aliases/PopUpAction.md) | Represents an action for a PopUp. |
| [PopUpInstance](type-aliases/PopUpInstance.md) | Represents an instance of a PopUp. |
| [PopUpOptions](type-aliases/PopUpOptions.md) | Represents the options for a PopUp. |
| [UIUtilModal](type-aliases/UIUtilModal.md) | Represents a utility for managing UI modals. |
| [UIUtilPrompt](type-aliases/UIUtilPrompt.md) | Type alias for UIUtilPrompt, which includes specific methods from UIUtilModal. |

## Variables

| Variable | Description |
| ------ | ------ |
| [DryUXContext](variables/DryUXContext.md) | React context for UI utilities. |

## Functions

| Function | Description |
| ------ | ------ |
| [classSet](functions/classSet.md) | Copyright 2013 Facebook, Inc. |
| [DajaxiceProxy](functions/DajaxiceProxy.md) | This function is used to create a type safe proxy for the Dajaxice functions. |
| [DryUXProvider](functions/DryUXProvider.md) | DryUXProvider component that provides UI utilities and optionally renders a UIUtilRenderer. |
| [DryUXRenderer](functions/DryUXRenderer.md) | UIUtilRenderer component that renders modals based on the UIUtil context. |
| [ErrorScreen](functions/ErrorScreen.md) | A React component that displays an error screen with a message and a button to go back to the home page. |
| [flatten](functions/flatten.md) | Flattens an object with the paths for keys. |
| [fnWithAuthCheck](functions/fnWithAuthCheck.md) | Calls the authCheckUrl to check if the user is authenticated. The URL should return a JSON response with just `true` or `false` to indicate if the user is authenticated. If user is authenticated, it will call the function (fn), otherwise it will redirect to `authRedirectUrl`. |
| [formatDollar](functions/formatDollar.md) | Formats a number as a dollar amount. |
| [getUrlParams](functions/getUrlParams.md) | Retrieves URL parameters as an object. |
| [importScript](functions/importScript.md) | Imports a script and returns a promise that resolves when the script is loaded. |
| [importStyleSheet](functions/importStyleSheet.md) | Imports a stylesheet and adds it to the head. |
| [initLoggerFactory](functions/initLoggerFactory.md) | Initializes a logger factory with the specified path. |
| [Input](functions/Input.md) | Forwarded ref input component with enhancements. |
| [insertUrlParam](functions/insertUrlParam.md) | Inserts a URL parameter. |
| [insertUrlParams](functions/insertUrlParams.md) | Inserts multiple URL parameters. |
| [Money](functions/Money.md) | Renders a formatted dollar amount with a dollar sign and parentheses if the amount is negative. |
| [preventDefault](functions/preventDefault.md) | Returns a function that will call the given handler and prevent the default event behavior. |
| [RenderWhenVisible](functions/RenderWhenVisible.md) | A React component that renders its children only when they become visible in the viewport. |
| [Select](functions/Select.md) | Forwarded ref select component with enhancements. |
| [Spinner](functions/Spinner.md) | A React component that renders a spinner. The spinner styles are added when the component is mounted. |
| [TextArea](functions/TextArea.md) | Forwarded ref textarea component with enhancements. |
| [toHashCode](functions/toHashCode.md) | Converts a string to a hash code. |
| [tryParseJson](functions/tryParseJson.md) | Parses a JSON string and returns the corresponding object. |
| [unflatten](functions/unflatten.md) | Unflattens an object with the paths for keys. |
| [useCountdown](functions/useCountdown.md) | Creates a countdown timer that will call the onExpiry function when the timer expires. |
| [useDimensions](functions/useDimensions.md) | - |
| [useDryUxContext](functions/useDryUxContext.md) | Hook to use the UIUtil context. |
| [useIsVisible](functions/useIsVisible.md) | Hook to check if an element is visible in the viewport. |
| [usePubSub](functions/usePubSub.md) | Hook to publish and subscribe to custom events. |
