import {TagEnum} from "../enums/tag.enum.ts";
import MongoDB from "../images/mongodb.png";
import NodeJS from "../images/nodejs.png";
import React from "../images/react.png";
import AWS from "../images/aws.png";

const tags = {
    [TagEnum.MONGO_DB]: {
        image: MongoDB,
        name: 'MongoDB'
    },
    [TagEnum.AWS]: {
        image: AWS,
        name: 'AWS'
    },
    [TagEnum.NODE_JS]: {
        image: NodeJS,
        name: 'NodeJS'
    },
    [TagEnum.REACT]: {
        image: React,
        name: 'React'
    }
}

export function getTagInfo(name: TagEnum) {
    return tags[name];
}