import csv 
import os 
import datetime 
import sys


def init(thresh,dataset):
    # setting parameters
    print("Setting parameters...")

    print("Threshold  Value: {}".format(thresh))
    #algorithm/plastic_detector_roi.py

    command = "python3 plastic_detector_roi.py "+ str(dataset) + " " +\
            str(thresh) # ./images/Dataset/ 800 # 

    os.system(command)


def read(path): 
    print("Reading output files")

    count = 0

    entries = os.listdir(path)

    for i in entries: count +=1

    return count

def out(tot,pos): 
    print("Total mold shots in data set: {} \n clean mold shots:\
        {} \n".format(tot,pos))

def check_accuracy(): #code to check resulting images 
    print("Accuracy check from labelled data") 

    # store labeled negatives in set
    # store debug_img/negatives in set 
    # Iterate through labeled negative and check in debug_img
    # count correctly identified images
    # correctly identified --> images found on both labeled/negatives & \
    # debug_img/negatives
    # 
    # Repeat for positives
    #
    #
    # count incorrecly identified 
    #   total (debug_img/positives + debug_img/negatives ) - correct 
    #
    # Accuracy = correct / total * 100



    labeled_neg = set()
    debug_neg = set()
    labeled_pos = set()
    debug_pos = set()

    # Checking for negatives
    labeled_neg = set(x.split('_',)[1] for x in os.listdir('./labeled/Negatives'))
    # print(labeled_neg)

    # print('\n\n\n\n')


    debug_neg = set(x.split('_')[4][:-4] for x in os.listdir('./debug_img/negatives'))

    # print(debug_neg)

    true_neg = 0

    neg = debug_neg.intersection(labeled_neg)
    # print(neg)
    # for img in labeled_neg:
        # if img in debug_neg:
            # print(img)
            # true_neg +=1

    print('True negatives: ')    
    print(len(neg))
    print('\nFalse negatives: ');
    print(len(debug_neg)-len(neg))
    print('\n\n')

    labeled_pos = set( x.split('_')[1] for x in os.listdir('./labeled/Positives'))
    # print(labeled_pos)

    debug_pos = set(x.split('_')[4] for x in os.listdir('./debug_img/positives'))

    pos = debug_pos.intersection(labeled_pos)

    print('True positives: ')    
    print(len(pos))
    print('\nFalse positives: ');
    print(len(debug_pos)-len(pos))
    print('\n\n')
    return 0


if __name__ == "__main__": 

    if(len(sys.argv) ==1): 
        print("Enter arguments as {Dataset} {threshold}")

    print("Threshold value:"+str(sys.argv[1])) 
    
    #500
    # dataset = images/Dataset/
    
    threshold = int(sys.argv[2]) 
    dataset = str(sys.argv[1])   
    results = {}

    begin_time = datetime.datetime.now()

    # while threshold <= 1000:

    init(threshold,dataset)

    tot = 0
    pos=0

    #positives 
    path = './debug_img/positives/'
    positive = read(path)
    print(positive)

    #negatives 
    path = './debug_img/negatives/' 
    negative = read(path)
    print(negative)

    out(positive + negative, negative)

    results[threshold] = [positive,negative]
    # threshold += 500

    print("==============Analaysis Tool Output==================") 
    print("|  Threshold   |     Positives    |      Negatives    |")
    print("-----------------------------------------------------") 
    for i in results:
        print("|     {}      |         {}       |         {}      |".format(i,\
                results[i][0],results[i][1]))


    print("\n\n\nRuntime: ")
    
    print(datetime.datetime.now() - begin_time)

    check_accuracy()
