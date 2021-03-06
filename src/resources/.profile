alias dir="ls -al" 

export SOFTWARE_DIR=/Users/puck/Software
export NEO_DIR=/Users/puck/Software/neo-2.21.12.2/tools

export PATH=.:..:./bin:$NEO_DIR:$PATH:

alias tunnel="'$NEO_DIR/neo.sh' open-db-tunnel --id metalib '$NEO_DIR/template.properties'  "
alias neo="cd $NEO_DIR" 


## Java
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_25.jdk/Contents/Home
# export JAVA_HOME=/Users/puck/Software/sapjvm-7/sapjvm_7
export JAVA_OPTS="-Dfile.encoding=UTF-8 "
# export JVM_ARGS="-Xms1024m -Xmx1024m -Dpropname=propvalue "

## Derby 
export DERBY_HOME=/opt/derby-10 
export DERBY_OPTS=-Dij.protocol=jdbc:derby://localhost/ 
alias derby-ij="java -jar $DERBY_HOME/lib/derbyrun.jar ij" 
alias derby-server="java -jar $DERBY_HOME/lib/derbyrun.jar server" 
alias derby-sys-info="java -jar $DERBY_HOME/lib/derbyrun.jar sysinfo"
alias derby-info="java -jar $DERBY_HOME/lib/derbyrun.jar dblook"
export PATH="$DERBY_HOME/bin:$PATH"

## SVN
export PATH="/opt/subversion/bin:$PATH"

## Maven
export M2_HOME=/Users/puck/Software/maven-3 
export PATH=$M2_HOME/bin:$PATH 
export MAVEN_OPTS=-Xmx1024m


## hana
alias hana="cd /Users/puck/Work/hana/metalib"


