//
//  GimbalCordova.h
//  GimbalApp
//
//  Created by Julie Driscoll on 7/29/14.
//
//

#import <Cordova/CDV.h>

@interface GimbalCordova : CDVPlugin

- (void) gimbalMethod:(CDVInvokedUrlCommand*)command;

@end
