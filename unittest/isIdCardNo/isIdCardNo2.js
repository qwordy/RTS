function isIdCardNo(num) 
      { 
        if (isNaN(num)) { return false;} 
        var len = num.length, re; 
        if (len == 15) 
          re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/); 
        else if (len == 18) 
          re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d)$/); 
        else { return false;} 
        var a = num.match(re); 
        if (a != null) 
        { 
          if (len==15) 
          { 
            var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
            var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
          } 
          else 
          { 
            var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
            var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
          } 
          if (!B) { return false;} 
        }
        len; 
        return true; 
      } 

var arg = process.argv[2];
if (arg == 0)
	isIdCardNo('529573842238294');
else if (arg == 1)
	isIdCardNo('913410125092726101');
else if (arg == 2)
	isIdCardNo('015455208376919440');
else if (arg == 3)
	isIdCardNo('004913466574321');
else if (arg == 4)
	isIdCardNo('i am not number');
else if (arg == 5)
	isIdCardNo('i am not number');
else if (arg == 6)
	isIdCardNo('671159901024884');
else if (arg == 7)
	isIdCardNo('i am not number');
else if (arg == 8)
	isIdCardNo('725439831491077343');
else if (arg == 9)
	isIdCardNo('i am not number');
else if (arg == 10)
	isIdCardNo('462360509310132');
else if (arg == 11)
	isIdCardNo('292431660809966');
else if (arg == 12)
	isIdCardNo('i am not number');
else if (arg == 13)
	isIdCardNo('992456373855041');
else if (arg == 14)
	isIdCardNo('i am not number');
else if (arg == 15)
	isIdCardNo('815720884405376');
else if (arg == 16)
	isIdCardNo('i am not number');
else if (arg == 17)
	isIdCardNo('031636912295694');
else if (arg == 18)
	isIdCardNo('469748357216243');
else if (arg == 19)
	isIdCardNo('677003983614016');
else if (arg == 20)
	isIdCardNo('865812743099470191');
else if (arg == 21)
	isIdCardNo('244055451601803');
else if (arg == 22)
	isIdCardNo('i am not number');
else if (arg == 23)
	isIdCardNo('932337071319905');
else if (arg == 24)
	isIdCardNo('115223940993651');
else if (arg == 25)
	isIdCardNo('734605766288288');
else if (arg == 26)
	isIdCardNo('105958397095062');
else if (arg == 27)
	isIdCardNo('041687136602166542');
else if (arg == 28)
	isIdCardNo('i am not number');
else if (arg == 29)
	isIdCardNo('i am not number');
else if (arg == 30)
	isIdCardNo('i am not number');
else if (arg == 31)
	isIdCardNo('900736903226812');
else if (arg == 32)
	isIdCardNo('i am not number');
else if (arg == 33)
	isIdCardNo('735167449865141728');
else if (arg == 34)
	isIdCardNo('i am not number');
else if (arg == 35)
	isIdCardNo('249599280608966');
else if (arg == 36)
	isIdCardNo('383224231736079872');
else if (arg == 37)
	isIdCardNo('i am not number');
else if (arg == 38)
	isIdCardNo('638386034550230003');
else if (arg == 39)
	isIdCardNo('698932716541450');
else if (arg == 40)
	isIdCardNo('i am not number');
else if (arg == 41)
	isIdCardNo('487441960199445');
else if (arg == 42)
	isIdCardNo('i am not number');
else if (arg == 43)
	isIdCardNo('830711414705112');
else if (arg == 44)
	isIdCardNo('393842043449563829');
else if (arg == 45)
	isIdCardNo('527360884730249');
else if (arg == 46)
	isIdCardNo('117156441717640195');
else if (arg == 47)
	isIdCardNo('i am not number');
else if (arg == 48)
	isIdCardNo('466884100695120982');
else if (arg == 49)
	isIdCardNo('262312157390291630');
else if (arg == 50)
	isIdCardNo('715282109889513');
else if (arg == 51)
	isIdCardNo('i am not number');
else if (arg == 52)
	isIdCardNo('i am not number');
else if (arg == 53)
	isIdCardNo('i am not number');
else if (arg == 54)
	isIdCardNo('i am not number');
else if (arg == 55)
	isIdCardNo('400847640174398');
else if (arg == 56)
	isIdCardNo('i am not number');
else if (arg == 57)
	isIdCardNo('628150557330571');
else if (arg == 58)
	isIdCardNo('832074185000709');
else if (arg == 59)
	isIdCardNo('498823930511071891');
else if (arg == 60)
	isIdCardNo('815618242392364');
else if (arg == 61)
	isIdCardNo('829834210686387266');
else if (arg == 62)
	isIdCardNo('040081839016389930');
else if (arg == 63)
	isIdCardNo('555117319686781');
else if (arg == 64)
	isIdCardNo('i am not number');
else if (arg == 65)
	isIdCardNo('170637628594643');
else if (arg == 66)
	isIdCardNo('i am not number');
else if (arg == 67)
	isIdCardNo('727020248580988');
else if (arg == 68)
	isIdCardNo('i am not number');
else if (arg == 69)
	isIdCardNo('858632804673504');
else if (arg == 70)
	isIdCardNo('i am not number');
else if (arg == 71)
	isIdCardNo('508364575765054');
else if (arg == 72)
	isIdCardNo('561627483538159441');
else if (arg == 73)
	isIdCardNo('i am not number');
else if (arg == 74)
	isIdCardNo('382399448201474');
else if (arg == 75)
	isIdCardNo('202034713211078');
else if (arg == 76)
	isIdCardNo('i am not number');
else if (arg == 77)
	isIdCardNo('207114993162123782');
else if (arg == 78)
	isIdCardNo('726593150152012283');
else if (arg == 79)
	isIdCardNo('458410486376828');
else if (arg == 80)
	isIdCardNo('957030819892630');
else if (arg == 81)
	isIdCardNo('283747903428239072');
else if (arg == 82)
	isIdCardNo('i am not number');
else if (arg == 83)
	isIdCardNo('803772573467440');
else if (arg == 84)
	isIdCardNo('i am not number');
else if (arg == 85)
	isIdCardNo('861399065700472');
else if (arg == 86)
	isIdCardNo('i am not number');
else if (arg == 87)
	isIdCardNo('027694917385112799');
else if (arg == 88)
	isIdCardNo('782468763900672543');
else if (arg == 89)
	isIdCardNo('441952229541399');
else if (arg == 90)
	isIdCardNo('294748311364345');
else if (arg == 91)
	isIdCardNo('458468305763274');
else if (arg == 92)
	isIdCardNo('655156591048860025');
else if (arg == 93)
	isIdCardNo('382257178867404');
else if (arg == 94)
	isIdCardNo('911480168793106');
else if (arg == 95)
	isIdCardNo('106574138745747882');
else if (arg == 96)
	isIdCardNo('464158291275102');
else if (arg == 97)
	isIdCardNo('359051645181558');
else if (arg == 98)
	isIdCardNo('041680860297670789');
else if (arg == 99)
	isIdCardNo('220022699173546948');
