//
//  GimbalCordova.m
//  GimbalApp
//
//  Created by Julie Driscoll on 7/29/14.
//
//

#import "GimbalCordova.h"
#import <Cordova/CDV.h>

@implementation GimbalCordova

- (void)gimbalMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* myarg = [command.arguments objectAtIndex:0];
    
    if (myarg != nil) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
