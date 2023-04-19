<template>
  <ul v-for="(item, index) in comments" :key="index">
    <Comment
      v-bind="{
        comment: item.auther,
        replies: item.comments,
      }"
    />
  </ul>
</template>

<script setup>
import Comment from '@/components/Comment'

const comments = [
  {
    _id: '643f9ea406dddbaa478340b8',
    picture: 'http://placehold.it/32x32',
    auther: 'Mccormick Carter',
    gender: 'male',
    comment:
      'Tempor sit sunt fugiat dolor magna. Sint pariatur aute amet est qui fugiat consequat quis officia nulla mollit minim laborum aute. Sit ipsum proident dolore fugiat proident mollit laboris nisi aliquip aliquip cupidatat ullamco aliquip duis. Ipsum Lorem labore adipisicing est cillum. Ullamco fugiat aute adipisicing consectetur ex sit. Eu est nostrud dolor aliquip est est qui amet cillum sunt. Fugiat sint laboris labore Lorem consequat qui ipsum adipisicing nisi duis cillum enim fugiat fugiat.\r\n',
    liked: true,
    isActive: true,
    comments: [
      {
        _id: '643f9ed8e808e89c4105d165',
        picture: 'http://placehold.it/32x32',
        auther: 'Cole Solis',
        gender: 'male',
        comment:
          'Eiusmod elit amet nostrud pariatur ea irure excepteur amet laboris nisi officia. Eiusmod veniam cillum sit ullamco incididunt Lorem minim eu occaecat elit. Consequat labore duis aute ipsum irure nisi incididunt voluptate proident incididunt cillum velit excepteur adipisicing. Dolor duis sit aute id proident adipisicing non fugiat. Ut veniam cillum cupidatat eiusmod enim sit irure voluptate commodo aute laboris sunt. Dolor nulla est tempor cillum sint adipisicing ut ipsum ea in sit dolore consequat. Excepteur nisi adipisicing quis minim exercitation commodo eu enim.\r\n',
        liked: true,
        isActive: false,
        comments: [
          {
            _id: '643f9f3fbc40b5e780f497f4',
            picture: 'http://placehold.it/32x32',
            auther: 'Summer Fitzgerald',
            gender: 'female',
            comment:
              'Est qui irure magna cillum. Aute non magna aliqua consectetur occaecat esse nostrud sit culpa culpa elit excepteur commodo reprehenderit. Consequat minim aliqua nulla do excepteur enim esse id proident ipsum non irure. Id elit nostrud aliqua dolor veniam culpa laborum. Aliquip minim eu officia esse esse aliquip eu aute qui veniam commodo in. Veniam aliquip occaecat quis Lorem ipsum labore minim cillum ullamco commodo anim dolor aliqua laboris.\r\n',
            liked: false,
            isActive: false,
            comments: [
              {
                _id: '643f9f749843acec26988602',
                picture: 'http://placehold.it/32x32',
                auther: 'Dixie Park',
                gender: 'female',
                comment:
                  'Occaecat non consectetur sunt mollit commodo sint deserunt qui do. Laborum elit excepteur occaecat minim esse quis et irure quis magna id in est proident. Velit tempor dolore velit do ex ad id Lorem magna eiusmod aliquip sit. Reprehenderit aliqua duis ullamco consequat cillum ea elit ipsum qui amet.\r\n',
                liked: false,
                isActive: true,
              },
            ],
          },
        ],
      },
      {
        _id: '643f9ed8fc32ce252c947238',
        picture: 'http://placehold.it/32x32',
        auther: 'Viola Nash',
        gender: 'female',
        comment:
          'Culpa labore proident dolore id ex ut sunt laboris. Deserunt aliquip sit ex voluptate nisi ipsum dolore ut magna anim amet amet Lorem deserunt. Quis enim non qui aliquip sunt sint tempor laboris. Adipisicing in magna qui ex occaecat.\r\n',
        liked: true,
        isActive: false,
        comments: [
          {
            _id: '643f9f9601650cbbf00cf440',
            picture: 'http://placehold.it/32x32',
            auther: 'Rosalie Knowles',
            gender: 'female',
            comment:
              'Incididunt elit cupidatat pariatur non. Et adipisicing ipsum culpa sit consectetur aute consectetur excepteur esse consequat magna nisi. Ut laborum Lorem ea enim quis do incididunt ut enim ea exercitation commodo culpa nostrud. Culpa occaecat aute labore nulla voluptate dolore sint cupidatat reprehenderit elit. Cillum nulla nostrud ipsum id laboris dolore consectetur mollit sunt dolor esse voluptate adipisicing elit. Nostrud excepteur proident anim non incididunt nulla dolore ad dolore ullamco ad do officia dolor. Sint labore occaecat ullamco enim ut cupidatat labore enim.\r\n',
            liked: false,
            isActive: false,
            comments: [
              {
                _id: '643f9faf6043c1f0e17198e6',
                picture: 'http://placehold.it/32x32',
                auther: 'Cantu Mccullough',
                gender: 'male',
                comment:
                  'Qui ex sint labore ea irure sit irure voluptate. Lorem sint exercitation consectetur duis incididunt dolor irure dolor aute et exercitation excepteur. Officia labore ad id officia adipisicing exercitation ex qui ex ex.\r\n',
                liked: false,
                isActive: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: '643f9ea412fa57fdbd83116e',
    picture: 'http://placehold.it/32x32',
    auther: 'Townsend Gallagher',
    gender: 'male',
    comment:
      'Fugiat tempor excepteur ad do Lorem aliqua do est eu officia. Deserunt incididunt ipsum mollit exercitation veniam veniam officia labore cupidatat non non ex dolore. Magna et nostrud adipisicing sunt magna. Nulla quis quis duis irure eiusmod qui. Irure consequat nulla magna qui.\r\n',
    liked: false,
    isActive: false,
    comments: [
      {
        _id: '643f9f1e94a2aa4b06e2f735',
        picture: 'http://placehold.it/32x32',
        auther: 'Krystal Brewer',
        gender: 'female',
        comment:
          'Proident culpa anim irure ad cupidatat ullamco. Est sunt dolor cupidatat minim consectetur magna exercitation nulla consequat enim ut tempor enim cupidatat. Culpa minim sit laborum ipsum minim. Duis pariatur sint voluptate commodo aliqua consectetur eu amet est ad deserunt dolor dolor.\r\n',
        liked: false,
        isActive: false,
      },
    ],
  },
  {
    _id: '643f9ea4e81aed31db7173b0',
    picture: 'http://placehold.it/32x32',
    auther: 'Hannah Horton',
    gender: 'female',
    comment:
      'In in mollit ea nostrud irure ullamco tempor commodo aute consequat do ex cupidatat ea. Velit irure nostrud sint proident id. Deserunt exercitation sunt sunt sint esse ipsum minim Lorem. Mollit ipsum cupidatat in aliqua. Ea in consectetur quis nisi. Anim Lorem consequat eu commodo quis tempor.\r\n',
    liked: true,
    isActive: false,
    comments: [
      {
        _id: '643fa0629fd108bbd5525f73',
        picture: 'http://placehold.it/32x32',
        auther: 'Robertson Wilkinson',
        gender: 'male',
        comment:
          'Fugiat id excepteur proident eiusmod magna tempor dolore commodo duis cillum eu laboris aute quis. Aliquip elit ullamco et reprehenderit incididunt culpa ex. Ex excepteur occaecat nostrud cupidatat fugiat nisi ad nulla culpa ullamco amet.\r\n',
        liked: false,
        isActive: true,
      },
    ],
  },
  {
    _id: '643f9ea43d562ef2fdf59819',
    picture: 'http://placehold.it/32x32',
    auther: 'Marjorie Holt',
    gender: 'female',
    comment:
      'Fugiat minim ullamco culpa laborum ea velit non. Quis veniam esse ut ad. Consequat eu ea voluptate non cupidatat duis aliquip do ex in eu. Consectetur laborum magna non sint.\r\n',
    liked: false,
    isActive: false,
    comments: [
      {
        _id: '643f9fca1f4f5829228dab05',
        picture: 'http://placehold.it/32x32',
        auther: 'Ballard Parker',
        gender: 'male',
        comment:
          'Elit anim nostrud fugiat velit do. Veniam aliquip Lorem ex mollit enim proident esse exercitation officia nisi in enim. Sint adipisicing esse aliquip excepteur commodo dolore pariatur officia dolore minim cillum sint incididunt occaecat. Ut incididunt cillum nisi esse commodo ut sit enim in deserunt sit duis exercitation laboris. Sint ex laborum exercitation eu ut ut et qui cillum. Adipisicing qui cupidatat consectetur et.\r\n',
        liked: true,
        isActive: false,
        comments: [
          {
            _id: '643f9fe17cc1c2e87c051764',
            picture: 'http://placehold.it/32x32',
            auther: 'Ashley Abbott',
            gender: 'female',
            comment:
              'Anim commodo laboris magna nostrud qui consequat commodo enim adipisicing esse. Deserunt voluptate fugiat incididunt dolor officia in sint. Reprehenderit est fugiat anim mollit mollit. Voluptate laborum aute cillum occaecat adipisicing ut do elit do ut ullamco et. Non qui id dolor in commodo. Veniam ad minim laborum amet aliqua exercitation anim veniam occaecat id sit consectetur tempor. Tempor sunt cupidatat nulla pariatur enim officia.\r\n',
            liked: false,
            isActive: true,
            comments: [
              {
                _id: '643f9ff5c9c7b66dcbb8b56f',
                picture: 'http://placehold.it/32x32',
                auther: 'Dickson Wilcox',
                gender: 'male',
                comment:
                  'Est non non irure excepteur amet eiusmod ut tempor labore laborum ut qui. Voluptate esse voluptate veniam nisi dolore in mollit elit reprehenderit labore. Velit enim labore ipsum minim sit nostrud est. Commodo Lorem non ut Lorem quis ipsum consequat officia eu cupidatat commodo mollit. Aliqua occaecat cupidatat ad culpa est ullamco magna. Proident veniam ex minim consectetur cillum enim mollit.\r\n',
                liked: false,
                isActive: false,
                comments: [
                  {
                    _id: '643fa0098eb2c18ac2affe70',
                    picture: 'http://placehold.it/32x32',
                    auther: 'Preston Newton',
                    gender: 'male',
                    comment:
                      'Est irure duis labore anim. Esse anim in labore mollit reprehenderit do velit aliqua ea exercitation pariatur tempor. Enim consectetur deserunt cupidatat officia fugiat pariatur ipsum et occaecat.\r\n',
                    liked: false,
                    isActive: false,
                    comments: [
                      {
                        _id: '643fa01aa0985d2f002ce03a',
                        picture: 'http://placehold.it/32x32',
                        auther: 'Kellie Mckay',
                        gender: 'female',
                        comment:
                          'Labore sint do cillum voluptate culpa pariatur velit id velit deserunt tempor nulla culpa proident. Amet occaecat cupidatat officia deserunt excepteur nisi mollit excepteur esse irure. Cupidatat sint est voluptate cillum incididunt velit Lorem id pariatur. Quis proident magna est ea sint deserunt consequat in officia ipsum cillum dolor aute in. Proident enim quis enim reprehenderit excepteur duis do duis in est dolore aliqua fugiat exercitation. Adipisicing adipisicing sit aliqua occaecat do officia. Voluptate labore excepteur aliqua fugiat id occaecat irure sint nostrud cupidatat fugiat eu.\r\n',
                        liked: true,
                        isActive: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: '643f9ea42c042686ed5a7014',
    picture: 'http://placehold.it/32x32',
    auther: 'Huffman Dominguez',
    gender: 'male',
    comment:
      'Quis deserunt in aliquip enim nisi aliqua ea aliquip occaecat. Occaecat ad aliquip sunt duis fugiat aliqua. Ad eu mollit exercitation cupidatat eu officia officia ad. Dolore Lorem do dolor amet fugiat id fugiat dolore laboris amet ea consectetur. Adipisicing est dolor do duis consectetur veniam Lorem excepteur. Est voluptate nulla consequat ipsum irure ipsum eiusmod minim.\r\n',
    liked: true,
    isActive: false,
    comments: [
      {
        _id: '643fa0379b2d763f1d43a443',
        picture: 'http://placehold.it/32x32',
        auther: 'Stephens Rowe',
        gender: 'male',
        comment:
          'Commodo cupidatat elit quis proident officia sint ipsum cillum nulla magna. Nisi occaecat id elit dolore aliqua ad eiusmod. Velit et eiusmod anim consectetur mollit.\r\n',
        liked: false,
        isActive: false,
      },
    ],
  },
  {
    _id: '643f9ea4a86b3fa859c0f878',
    picture: 'http://placehold.it/32x32',
    auther: 'Holden Talley',
    gender: 'male',
    comment:
      'Duis id occaecat irure adipisicing ex officia sunt minim occaecat sunt consequat deserunt excepteur. Culpa magna ea nulla deserunt cupidatat eu anim ut cupidatat est elit qui aliqua Lorem. Dolore cupidatat id quis consectetur adipisicing laboris magna voluptate aliquip nisi est ut. Consequat elit nisi id amet excepteur qui voluptate dolor reprehenderit cillum aute. Eiusmod aute minim irure ex ullamco cillum sit excepteur ad. Est aliquip dolor in labore sit sit. Incididunt duis ullamco cillum adipisicing exercitation eiusmod cillum ullamco consequat excepteur labore ex.\r\n',
    liked: true,
    isActive: false,
    comments: [
      {
        _id: '643fa04c18710d3474ac69c3',
        picture: 'http://placehold.it/32x32',
        auther: 'Dionne Lindsey',
        gender: 'female',
        comment:
          'Mollit adipisicing adipisicing nisi nisi velit non ullamco. Occaecat aute tempor qui velit pariatur ea. Cupidatat sit consectetur do nulla consectetur. Ipsum occaecat do cillum nulla esse fugiat aliqua irure culpa duis velit. Eiusmod proident nulla voluptate enim nisi esse eiusmod officia adipisicing in. Dolor eu enim tempor excepteur consequat.\r\n',
        liked: false,
        isActive: false,
      },
    ],
  },
]
</script>
