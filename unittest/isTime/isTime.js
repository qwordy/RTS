function isTime(str) 
      { 
        var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/); 
        if (a == null) {
        //alert('输入的参数不是时间格式'); 
          return false;} 
        if (a[1]>24 || a[3]>60 || a[4]>60) 
        { 
          //alert("时间格式不对"); 
          return false; 
        } 
        return true; 
      } 

var arg = process.argv[2];
if (arg == 0)
	isTime('11');
else if (arg == 1)
	isTime('99:55:62');
else if (arg == 2)
	isTime('98');
else if (arg == 3)
	isTime('52:22:42');
else if (arg == 4)
	isTime('22');
else if (arg == 5)
	isTime('77:48:20');
else if (arg == 6)
	isTime('10');
else if (arg == 7)
	isTime('6');
else if (arg == 8)
	isTime('1');
else if (arg == 9)
	isTime('73:12:66');
else if (arg == 10)
	isTime('49:35:90');
else if (arg == 11)
	isTime('50:44:28');
else if (arg == 12)
	isTime('11:98:44');
else if (arg == 13)
	isTime('84:59:84');
else if (arg == 14)
	isTime('78:36:46');
else if (arg == 15)
	isTime('40:98:77');
else if (arg == 16)
	isTime('50:6:24');
else if (arg == 17)
	isTime('86');
else if (arg == 18)
	isTime('50');
else if (arg == 19)
	isTime('95:37:44');
else if (arg == 20)
	isTime('35:74:31');
else if (arg == 21)
	isTime('42:59:30');
else if (arg == 22)
	isTime('79');
else if (arg == 23)
	isTime('10:69:75');
else if (arg == 24)
	isTime('45');
else if (arg == 25)
	isTime('73');
else if (arg == 26)
	isTime('13:31:65');
else if (arg == 27)
	isTime('70:46:21');
else if (arg == 28)
	isTime('11');
else if (arg == 29)
	isTime('78');
else if (arg == 30)
	isTime('2');
else if (arg == 31)
	isTime('63');
else if (arg == 32)
	isTime('62');
else if (arg == 33)
	isTime('11:58:50');
else if (arg == 34)
	isTime('63');
else if (arg == 35)
	isTime('55');
else if (arg == 36)
	isTime('80');
else if (arg == 37)
	isTime('94');
else if (arg == 38)
	isTime('15');
else if (arg == 39)
	isTime('11:30:79');
else if (arg == 40)
	isTime('16');
else if (arg == 41)
	isTime('18');
else if (arg == 42)
	isTime('63:86:17');
else if (arg == 43)
	isTime('23:92:58');
else if (arg == 44)
	isTime('34:89:61');
else if (arg == 45)
	isTime('60');
else if (arg == 46)
	isTime('55:5:31');
else if (arg == 47)
	isTime('95');
else if (arg == 48)
	isTime('73');
else if (arg == 49)
	isTime('26');
else if (arg == 50)
	isTime('17:19:48');
else if (arg == 51)
	isTime('49:55:47');
else if (arg == 52)
	isTime('92');
else if (arg == 53)
	isTime('63:18:62');
else if (arg == 54)
	isTime('85:60:73');
else if (arg == 55)
	isTime('54:2:22');
else if (arg == 56)
	isTime('15:18:89');
else if (arg == 57)
	isTime('53');
else if (arg == 58)
	isTime('68');
else if (arg == 59)
	isTime('27:57:80');
else if (arg == 60)
	isTime('83');
else if (arg == 61)
	isTime('76:92:20');
else if (arg == 62)
	isTime('82:39:20');
else if (arg == 63)
	isTime('5');
else if (arg == 64)
	isTime('70:67:98');
else if (arg == 65)
	isTime('11:79:48');
else if (arg == 66)
	isTime('52:48:3');
else if (arg == 67)
	isTime('8');
else if (arg == 68)
	isTime('79');
else if (arg == 69)
	isTime('19');
else if (arg == 70)
	isTime('65');
else if (arg == 71)
	isTime('44:60:39');
else if (arg == 72)
	isTime('97:16:90');
else if (arg == 73)
	isTime('83');
else if (arg == 74)
	isTime('19:47:36');
else if (arg == 75)
	isTime('35');
else if (arg == 76)
	isTime('2:27:0');
else if (arg == 77)
	isTime('35');
else if (arg == 78)
	isTime('1');
else if (arg == 79)
	isTime('29');
else if (arg == 80)
	isTime('9');
else if (arg == 81)
	isTime('48:49:80');
else if (arg == 82)
	isTime('94');
else if (arg == 83)
	isTime('65:93:16');
else if (arg == 84)
	isTime('76:57:44');
else if (arg == 85)
	isTime('68:84:13');
else if (arg == 86)
	isTime('42');
else if (arg == 87)
	isTime('34:81:63');
else if (arg == 88)
	isTime('83');
else if (arg == 89)
	isTime('57:51:75');
else if (arg == 90)
	isTime('68:4:77');
else if (arg == 91)
	isTime('19:13:90');
else if (arg == 92)
	isTime('46');
else if (arg == 93)
	isTime('11:47:91');
else if (arg == 94)
	isTime('65:35:18');
else if (arg == 95)
	isTime('38:11:63');
else if (arg == 96)
	isTime('30');
else if (arg == 97)
	isTime('38');
else if (arg == 98)
	isTime('4:39:60');
else if (arg == 99)
	isTime('31');
