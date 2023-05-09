import { View, Text } from 'react-native'
import Card from "../Design System/Card";
import Record from '../sections/Record';
import { ScrollView } from 'react-native-gesture-handler';

const Recorddata = [
    {
        summary: "H.R. 201: To provide for the award of a gold medal to the 369th Infantry Regiment, commonly known as the “Harlem Hellfighters”, in recognition of their bravery and outstanding service during World War.",
        name: "Ralph Norman",
        date: "23 April 2017", 
        vote: "yes",
    },
    {
        summary: "S. 240: To amend the Internal Revenue Code of 1986 to provide tax credits for energy storage technologies, and for other purposes",
        name: "Jane Smith",
        date: "12 May 2018",
        vote: "No",
    },
    {
        summary: "H.R. 375: To provide for the establishment of a national network of electric vehicle charging stations, and for other purposes.",
        name: "John Doe",
        date: "8 September 2019",
        vote: "No",
    },
    {
        summary: "H.R. 185: To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers, and for other purposes.",
        name: "Susan Johnson",
        date: "3 June 2020",
        vote: "No",
    },
    {
        summary: "H.R. 610: To amend the Fair Credit Reporting Act to provide for enhanced accuracy and transparency in the consumer reporting process, and for other purposes.",
        name: "Mike Brown",
        date: "9 November 2020",
        vote: "yes",
    },
    {
        summary: "S. 721: To establish the National Commission to Investigate the January 6 Attack on the United States Capitol Complex, and for other purposes.",
        name: "Linda Lee",
        date: "14 January 2021",
        vote: "No",
    },
    {
        summary: "H.R. 780: To provide for the cancellation of certain amounts owed with respect to Department of Agriculture rural housing programs, and for other purposes.",
        name: "David Kim",
        date: "28 march 2021",
        vote: "yes",
    },
    {
        summary: "S. 896: To promote the research, development, and demonstration of technologies to remove carbon dioxide from the atmosphere and oceans, and for other purposes.",
        name: "Susan Johnson",
        date: "28 February 2021",
        vote: "No",
    },
];

const Voterecords = () => {
    return (
        <View style={{paddingHorizontal:10}}>
            <Card style={{marginBottom:0}}>
                <Text style={{fontSize:16,}}>
                    Please find below the match reports on bills by <Text style={{ fontWeight: 'bold', lineHeight:24, fontSize:16, }} >Steve Scalise,</Text>  the representative for Louisiana's 1st congressional district.
                </Text>
            </Card>
            <Card style={{marginTop:20}}>
            <ScrollView>
            {Recorddata.map((item, index) => (
            <View>
                <Record item={item} key={index} />
                <View style={{ borderBottomColor: '#d4d4d4', borderBottomWidth: 1, marginBottom:15, marginTop:5   }} />
            </View>
            ))}
            </ScrollView>
            </Card>
           
        </View>
    )
}

export default Voterecords
