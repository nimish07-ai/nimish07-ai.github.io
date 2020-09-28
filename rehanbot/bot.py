import json

"""
    add 
    from bot import *
    

"""
data = {
    "file_dir": "list.txt",
    "debug_file_dir": "debug_file.txt"
}
debug = False      # seven Result checker
mannual=True     # for reham boiiiiiii


class seven_username_checker:
    usernames = []
    rese = True
    data = ""  # for copy of og
    wt_data = ""  # for data to be written
    new_add = []

    def reset(self):
        self.rese = True
        if debug:
            self.wt_data={"username": ["seven", "rehan", "bhakti", "moti_ruksar", "shilpa", "rekha"]}
        else:
            self.wt_data = {"username": []}

        self.wit()
        self.rese = False

    def opn(self):
        self.usernames = []
        self.data = ""
        try:
            with open(self.fil_dir, "r+", encoding="utf-8") as fil:
                self.data = fil.read()
        except Exception as e:
            print(e)
            return False

        return True

    def json_checker_convt(self, data):
        try:
            wt_data = json.loads(data)
        except Exception as e:
            print(e)
            return False

        self.usernames = wt_data
        return True

    def wit(self):

        try:
            self.wt_data = json.dumps(self.wt_data)

        except Exception as e:
            print(e)
            return False

        try:
            with open(self.fil_dir, "r+") as fil:
                if self.rese:
                    fil.truncate(0)

                fil.write(self.wt_data)
        except Exception as e:
            print(e)
            return False

        return True

    def Seven_check(self, username):
        if username in self.usernames["username"]:
            return True
        else:
            return False

    def Seven_add_new(self, username):
        if self.Seven_check(username):
            print('already present')
            return False
        else:
            self.new_add.append(username)
            self.usernames["username"].append(username)
            self.wt_data = self.usernames
            self.wit()
            return True

    def Seven_Unitest(self):

        self.seven_Result={}
        print("Starting Seven Check .......\n")

        self.reset()

        check = self.opn()
        self.seven_Result["open_file"]=check

        if check:
            check=" "
            if self.data == '{"username": ["seven", "rehan", "bhakti", "moti_ruksar", "shilpa", "rekha"]}':
                check=True

            else:
                check=False
        self.seven_Result["data_match"] =check


        if check:
            check=" "
            check = self.json_checker_convt(data=self.data)

        self.seven_Result["json_cvt"] = check


        lis=["seven", "rehan", "bhakti", "moti_ruksar", "shilpa", "rekha","mdh"]
        dic_lis={}
        check_dic_lis='{"seven": true, "rehan": true, "bhakti": true, "moti_ruksar": true, "shilpa": true, "rekha": true, "mdh": false}'
        check=" "
        for x in lis:
            check=self.Seven_check(x)
            dic_lis[x]=check

        dic_lis=json.dumps(dic_lis)
        check=dic_lis == check_dic_lis
        self.seven_Result["username_present"] = check


        if check:
            check=" "
            check=self.Seven_add_new("nimish")

        self.seven_Result["add_new"] = check


        check=""
        check=self.Seven_check(username="nimish")
        self.seven_Result["check_add_new"]=check

        cumsum=0
        for x in self.seven_Result.values():
            if x:
                cumsum+=1
        if cumsum == 6:
            print("77777777777777    Hey User all cool   77777777777777")
            a=input("press \n'1' and 'enter key' to print Result \n'enter key' to skip\n>>>")
            print(a)
            if a =="1":
                print(self.seven_Result)

        else :
            print("Hey user some eror!!!!!!!!!\n\n",self.seven_Result)


    def __init__(self):
        self.check_dir = []
        if debug:
            self.fil_dir = data["debug_file_dir"]
            self.Seven_Unitest()
        else:
            self.fil_dir = data["file_dir"]

            check = self.opn()
            self.check_dir = check

            if check:
                check = self.json_checker_convt(data=self.data)
                self.check_dir = check
            print("Ready to go Bot")




# if __name__ =="__main__":

    # if mannual ==True and debug==False:
    #     debug=False
    #     seven= seven_username_checker()
    #
    #     while(True):
    #         cmd=""
    #         cmd=input("press \n0 to add username \n1 to check username\n>>>")
    #         if cmd=="0":
    #             usd=input("enter user name  -TO ADD IN LIST!!!!!!!!\n>>>")
    #             cmd=seven.Seven_add_new(username=usd)
    #         else:
    #             cmd=="1"
    #             usd = input("enter user  name  - TO CHECK !!!!!!!!\n>>>")
    #             cmd=seven.Seven_check(username=usd)
    #             if cmd :
    #                 print("!!!!!!!!!!!!user found")
    #             else:
    #                 print("!!!!!!!!!!!!user not found")
    #
    #
    #
    #         if(cmd):
    #             print("done process")
    #         else:
    #             print('not done')
    #
    #         cmd= input("\npress \n'enter key' to continue  \n'1' and'enter key' to exit\n>>>")
    #         print(cmd)
    #         if  cmd == "1":
    #             break
    # else:
    #     Seven=seven_username_checker()

# else:
#     debug=False

#to add user
# return true if registed else fALSE
# print(seven.Seven_check("Seven"))

