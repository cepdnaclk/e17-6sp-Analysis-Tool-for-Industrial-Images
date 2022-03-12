import csv

def init():
    # setting parameters
    print("Setting parameters...")

def read(tot, pos):
    print("Reading output file")
    with open('cities.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    
        #skip heading
        next(spamreader)

        for row in spamreader:
            tot+=1
            # print(' '.join(row))
            if len(row[-1]) > 0 and float(row[-1]) > 125:    
                # print(type(float(row[-1])))
                pos+=1
    return tot,pos

def out(tot,pos):
    print("Total mold shots in data set: {} \n success rate: {} \n".format(tot,pos/tot*100))
    
if __name__ == "__main__":

    tot = 0
    pos=0

    tot,pos = read(tot,pos)

    out(tot,pos)
