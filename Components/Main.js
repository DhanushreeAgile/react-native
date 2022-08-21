import { List, Provider,DatePicker } from '@ant-design/react-native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
/**
 * Function that calculates rotation of the semicircle for firstProgressLayer
 * ( when percent is less than equal to 50 ) or for the secondProgressLayer
 * when percent is greater than 50.
 **/
const rotateByStyle = (percent, base_degrees, clockwise) => {
    let rotateBy = base_degrees;
    if (clockwise) {
        rotateBy = base_degrees + percent * 3.6;
    } else {
        //anti clockwise progress
        rotateBy = base_degrees - percent * 3.6;
    }
    return {
        transform: [{ rotateZ: `${rotateBy}deg` }],
    };
};

const renderThirdLayer = (
    percent,
    commonStyles,
    ringColorStyle,
    ringBgColorStyle,
    clockwise,
    bgRingWidth,
    progressRingWidth,
    innerRingStyle,
    startDegrees,
) => {
    let rotation = 45 + startDegrees;
    let offsetLayerRotation = -135 + startDegrees;
    if (!clockwise) {
        rotation += 180;
        offsetLayerRotation += 180;
    }
    if (percent > 50) {
        /**
         * Third layer circles default rotation is kept 45 degrees for clockwise rotation, so by default it occupies the right half semicircle.
         * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
         * before passing to the rotateByStyle function
         **/

        return (
            <View
                style={[
                    styles.secondProgressLayer,
                    rotateByStyle(percent - 50, rotation, clockwise),
                    commonStyles,
                    ringColorStyle,
                ]}
            />
        );
    } else {
        return (
            <View
                style={[
                    styles.offsetLayer,
                    innerRingStyle,
                    ringBgColorStyle,
                    { transform: [{ rotateZ: `${offsetLayerRotation}deg` }] },
                ]}
            />
        );
    }
};

const MainPage = ({
    percent,
    radius,
    bgRingWidth,
    progressRingWidth,
    ringColor,
    ringBgColor,
    textFontSize,
    textFontWeight,
    textFontColor,
    clockwise,
    bgColor,
    startDegrees,
}) => {
    const commonStyles = {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        borderTopWidth: progressRingWidth,
        borderLeftWidth: progressRingWidth,
        borderBottomWidth: progressRingWidth,
        borderRightWidth: progressRingWidth,
    };

    /**
     * Calculate radius for base layer and offset layer.
     * If progressRingWidth == bgRingWidth, innerRadius is equal to radius
     **/
    const widthDiff = progressRingWidth - bgRingWidth;
    const innerRadius = radius - progressRingWidth + bgRingWidth + widthDiff / 2;

    const innerRingStyle = {
        width: innerRadius * 2,
        height: innerRadius * 2,
        borderRadius: innerRadius,
        borderTopWidth: bgRingWidth,
        borderLeftWidth: bgRingWidth,
        borderBottomWidth: bgRingWidth,
        borderRightWidth: bgRingWidth,
    };

    const ringColorStyle = {
        borderRightColor: ringColor,
        borderTopColor: ringColor,
    };

    const ringBgColorStyle = {
        borderRightColor: ringBgColor,
        borderTopColor: ringBgColor,
    };

    const thickOffsetRingStyle = {
        borderRightColor: bgColor,
        borderTopColor: bgColor,
    };

    let rotation = -135 + startDegrees;
    /**
     * If we want our ring progress to be displayed in anti-clockwise direction
     **/
    if (!clockwise) {
        rotation += 180;
    }
    let firstProgressLayerStyle;
    /* when ther ring's border widths are different and percent is less than 50, then we need an offsetLayer
     * before the original offser layer to avoid ring color of the thick portion to be visible in the background.
     */
    let displayThickOffsetLayer = false;
    if (percent > 50) {
        firstProgressLayerStyle = rotateByStyle(50, rotation, clockwise);
    } else {
        firstProgressLayerStyle = rotateByStyle(percent, rotation, clockwise);
        if (progressRingWidth > bgRingWidth) {
            displayThickOffsetLayer = true;
        }
    }

    let offsetLayerRotation = -135 + startDegrees;
    if (!clockwise) {
        offsetLayerRotation += 180;
    }
    const [count, setcount] = useState(1)
    const [number, onChangeNumber] = React.useState({name:'',dob:'',gender:'',relation:'',barcode:'',photo:''});
    return (
        <View style={styles.maindisplay}>
            <View style={styles.display1}>

                <View style={[styles.container, { width: radius * 2, height: radius * 2 }]}>
                    <View
                        style={[
                            styles.baselayer,
                            innerRingStyle,
                            { borderColor: ringBgColor, borderWidth: bgRingWidth },
                        ]}
                    />
                    <View
                        style={[
                            styles.firstProgressLayer,
                            firstProgressLayerStyle,
                            commonStyles,
                            ringColorStyle,
                            {
                                borderTopWidth: progressRingWidth,
                                borderRightWidth: progressRingWidth,
                            },
                        ]}
                    />
                    {displayThickOffsetLayer && (
                        <View
                            style={[
                                styles.offsetLayer,
                                commonStyles,
                                thickOffsetRingStyle,
                                {
                                    transform: [{ rotateZ: `${offsetLayerRotation}deg` }],
                                    borderWidth: progressRingWidth,
                                },
                            ]}
                        />
                    )}
                    {renderThirdLayer(
                        percent,
                        commonStyles,
                        ringColorStyle,
                        ringBgColorStyle,
                        clockwise,
                        bgRingWidth,
                        progressRingWidth,
                        innerRingStyle,
                        startDegrees,
                    )}

                    <Text
                        style={[
                            styles.display,
                            {
                                fontSize: textFontSize,
                                fontWeight: textFontWeight,
                                color: textFontColor,
                            },
                        ]}>
                        {count} Of 7
                    </Text>

                </View>
                <View style={styles.textcontent}>
                    <Text
                        style={[
                            {
                                fontSize: 20,
                                fontWeight: textFontWeight,
                                color: textFontColor,
                                paddingVertical: 12
                            },
                        ]}>
                        Basic Info
                    </Text>
                    <Text
                        style={[
                            {
                                fontSize: 16,
                                // fontWeight: 20,
                                color: 'gray',
                            },
                        ]}>
                        Next : Pregnancy History
                    </Text>
                </View>
            </View>

            <View style={styles.mainview}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/basicinfo.png')}
                />



                <SafeAreaView>
                    <Text>Full Name</Text>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        
                        placeholder="Enter full Name"
                        keyboardType="ascii-capable"
                    />
                    <Text>Date of Birth</Text>
                    <Provider>
        <List>
          <DatePicker
            value={this.state.value}
            mode="date"
            defaultDate={new Date()}
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </Provider>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Date of birth"
                        keyboardType=""
                    />
                    <Text>Gender</Text>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Gender"
                        keyboardType="numeric"
                    />
                    <Text>Relation</Text>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="enter Relation"
                        keyboardType="numeric"
                    />
                <Text>Barcode</Text>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="enter barcode"
                        keyboardType="numeric"
                    />
                <Text>Photo</Text>
                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                      
                        keyboardType="numeric"
                    />
                </SafeAreaView>
            </View>
        </View>

    );
};

// default values for props
MainPage.defaultProps = {
    percent: 74,
    radius: 40,
    bgRingWidth: 10,
    progressRingWidth: 10,
    ringColor: '#B37FA0',
    ringBgColor: '#fff',
    textFontSize: 15,
    textFontColor: '#fff',
    textFontWeight: 'bold',
    clockwise: true,
    bgColor: 'white',
    startDegrees: 0,
};

/**
 * offsetLayer has transform:[{rotateZ: '-135deg'}] since
            * the offsetLayer rotation is fixed by us.
            **/
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    baselayer: {
        position: 'absolute',
    },
    firstProgressLayer: {
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    secondProgressLayer: {
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    offsetLayer: {
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    display: {
        position: 'absolute',
    },
    display1: {
        flex: 0,
        paddingTop: 60,
        flexDirection: "row",
        justifyContent: "center",

    },
    maindisplay: {
        flex: 1,
        // justifyContent: "center"
    },
    textcontent: {
        paddingHorizontal: 30,
    },
    mainview: {
        backgroundColor: "#fff",
        marginTop: 40,
        padding: 10,
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    input: {
        backgroundColor: '#84C2CF33',
        borderRadius: 6,
        height: 40,
        marginVertical: 12,
        paddingHorizontal: 10,

    }
});

export default MainPage;
