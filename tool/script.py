import csv
import os
import datetime


def init(thresh):
    # setting parameters
    print("Setting parameters...")

    print("Threshold  Value: {}".format(thresh))
    #algorithm/plastic_detector_roi.py

    command = "python3 plastic_detector_roi.py images/Dataset/ " + str(thresh)

    os.system(command)


def read(path):
    print("Reading output files")

    count = 0

    entries = os.listdir(path)

    for i in entries:
        count +=1

    return count

def out(tot,pos):
    print("Total mold shots in data set: {} \n clean mold shots: {} \n".format(tot,pos))
    
if __name__ == "__main__":

    threshold = 500
    
    results = {}

    begin_time = datetime.datetime.now()

    while threshold <= 1500:

        init(threshold)

        tot = 0
        pos=0

        path = 'debug_img/positives/'
        positive = read(path)
        print(positive)
        path = 'debug_img/negatives/'
        negative = read(path)
        print(negative)
        out(positive + negative, negative)


        results[threshold] = [positive,negative]
        threshold += 500

    print("==============Analaysis Tool Output==================")
    print("| Threshold   |     Positives    |      Negatives    |")
    print("-----------------------------------------------------")
    for i in results:
        print("|     {}      |         {}       |         {}        |".format(i,results[i][0],results[i][1]))


    print("\n\n\nRuntime: ")
    print(datetime.datetime.now() - begin_time)


