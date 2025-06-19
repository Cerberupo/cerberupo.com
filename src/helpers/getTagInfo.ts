import {TagEnum} from "../enums/tag.enum.ts";
import AngularJS from "../icons/tags/angularjs.svg";
import Angular from "../icons/tags/angular.svg";
import Ionic from "../icons/tags/ionic.svg";
import MongoDB from "../icons/tags/mongodb.svg";
import NodeJS from "../icons/tags/nodejs.svg";
import React from "../icons/tags/react.svg";
import HTML5 from "../icons/tags/html5.svg";
import Redis from "../icons/tags/redis.svg";
import MySQL from "../icons/tags/mysql.svg";
import CSS3 from "../icons/tags/css3.svg";
import AWS from "../icons/tags/aws.svg";
import PHP from "../icons/tags/php.svg";
import JQUERY from "../icons/tags/jquery.svg";
import Express from "../icons/tags/express.svg";
import Laravel from "../icons/tags/laravel.svg";
import Wordpress from "../icons/tags/wordpress.svg";
import Lambda from "../icons/tags/aws-lambda.svg";
import S3 from "../icons/tags/aws-s3.svg";
import IAM from "../icons/tags/aws-iam.svg";
import Gateway from "../icons/tags/aws-gateway.svg";
import EC2 from "../icons/tags/aws-ec2.svg";
import Cloudfront from "../icons/tags/aws-cloudfront.svg";
import Iot from "../icons/tags/aws-iot.svg";
import Athena from "../icons/tags/aws-athena.svg";
import Route53 from "../icons/tags/aws-route53.svg";
import SES from "../icons/tags/aws-ses.svg";
import Nest from "../icons/tags/nest.svg";
import Next from "../icons/tags/nextjs.svg";
import ECS from "../icons/tags/aws-ecs.svg";
import ECR from "../icons/tags/aws-ecr.svg";
import Postgresql from "../icons/tags/postgresql.svg";
import Terraform from "../icons/tags/terraform.svg";
import SQLite from "../icons/tags/sqlite.svg";
import Leaflet from "../icons/tags/leaflet.svg";
import Typescript from '../icons/tags/typescript.svg';
import Docker from '../icons/tags/docker.svg';

const tags = {
    [TagEnum.AWS_SES]: {
        image: SES,
        name: 'AWS - SES'
    },
    [TagEnum.AWS_ROUTE53]: {
        image: Route53,
        name: 'AWS - Route53'
    },
    [TagEnum.AWS_ATHENA]: {
        image: Athena,
        name: 'AWS - Athena'
    },
    [TagEnum.AWS_IOT]: {
        image: Iot,
        name: 'AWS - Iot'
    },
    [TagEnum.AWS_CLOUDFRONT]: {
        image: Cloudfront,
        name: 'AWS - Cloudfront'
    },
    [TagEnum.AWS_EC2]: {
        image: EC2,
        name: 'AWS - EC2'
    },
    [TagEnum.AWS_GATEWAY]: {
        image: Gateway,
        name: 'AWS - Gateway'
    },
    [TagEnum.AWS_IAM]: {
        image: IAM,
        name: 'AWS - IAM'
    },
    [TagEnum.AWS_S3]: {
        image: S3,
        name: 'AWS - S3'
    },
    [TagEnum.AWS_LAMBDA]: {
        image: Lambda,
        name: 'AWS - Lambda'
    },
    [TagEnum.WORDPRESS]: {
        image: Wordpress,
        name: 'Wordpress'
    },
    [TagEnum.LARAVEL]: {
        image: Laravel,
        name: 'Laravel'
    },
    [TagEnum.EXPRESS]: {
        image: Express,
        name: 'Express'
    },
    [TagEnum.JQUERY]: {
        image: JQUERY,
        name: 'JQuery'
    },
    [TagEnum.IONIC]: {
        image: Ionic,
        name: 'Ionic'
    },
    [TagEnum.ANGULAR]: {
        image: Angular,
        name: 'Angular'
    },
    [TagEnum.ANGULAR_JS]: {
        image: AngularJS,
        name: 'AngularJS'
    },
    [TagEnum.MONGO_DB]: {
        image: MongoDB,
        name: 'MongoDB'
    },
    [TagEnum.NODE_JS]: {
        image: NodeJS,
        name: 'NodeJS'
    },
    [TagEnum.REACT]: {
        image: React,
        name: 'React'
    },
    [TagEnum.HTML5]: {
        image: HTML5,
        name: 'HTML5'
    },
    [TagEnum.REDIS]: {
        image: Redis,
        name: 'Redis'
    },
    [TagEnum.CSS3]: {
        image: CSS3,
        name: 'CSS3'
    },
    [TagEnum.MY_SQL]: {
        image: MySQL,
        name: 'MySQL'
    },
    [TagEnum.AWS]: {
        image: AWS,
        name: 'AWS'
    },
    [TagEnum.PHP]: {
        image: PHP,
        name: 'PHP'
    },
    [TagEnum.NEST]: {
        image: Nest,
        name: 'Nest'
    },
    [TagEnum.NEXT]: {
        image: Next,
        name: 'Next'
    },
    [TagEnum.AWS_ECS]: {
        image: ECS,
        name: 'AWS - ECS'
    },
    [TagEnum.AWS_ECR]: {
        image: ECR,
        name: 'AWS - ECR'
    },
    [TagEnum.REACT_NATIVE]: {
        image: React,
        name: 'React native',
    },
    [TagEnum.POSTGRESQL]: {
        image: Postgresql,
        name: 'PostgreSQL',
    },
    [TagEnum.TERRAFORM]: {
        image: Terraform,
        name: 'Terraform',
    },
    [TagEnum.SQLITE]: {
        image: SQLite,
        name: 'SQLite',
    },
    [TagEnum.LEAFLET]: {
        image: Leaflet,
        name: 'Leaflet',
    },
    [TagEnum.TYPESCRIPT]: {
        image: Typescript,
        name: 'Typescript',
    },
    [TagEnum.DOCKER]: {
        image: Docker,
        name: 'Docker',
    },
}

export function getTagInfo(name: TagEnum) {
    return tags[name];
}