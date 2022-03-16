import csv
import os

def init():
    # setting parameters
    print("Setting parameters...")

def read(path):
    print("Reading output file")

    count = 0

    entries = os.listdir(path)

    for i in entries:
        count +=1

    # with open('cities.csv', newline='') as csvfile:
    #     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    
    #     #skip heading
    #     next(spamreader)

    #     for row in spamreader:
    #         tot+=1
    #         # print(' '.join(row))
    #         if len(row[-1]) > 0 and float(row[-1]) > 125:    
    #             # print(type(float(row[-1])))
    #             pos+=1


    return count

def out(tot,pos):
    print(tot)
    print(pos)
    print("Total mold shots in data set: {} \n success rate: {} \n".format(tot,float(pos/tot)*100))
    
if __name__ == "__main__":

    tot = 0
    pos=0

    path = 'debug_img/positives/'
    positive = read(path)
    print(positive)
    path = 'debug_img/negatives/'
    negative = read(path)
    print(negative)
    out(positive + negative, positive)
