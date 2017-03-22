# Inheritance 

# use  Inheritance  to write a domain model for 
# Employee has name,phone and position_title 
# Manager has name,phone and position_title 
# Task has title ,status , assigned_by (Manager) and assigned_to (Employee)
# Employee has many tasks 
# Manager can assign many tasks 
# #print_card is a method for Employee and Manager to print their name,phone and position_title 
# #assign_task is method enables the manger to assign a task to an employee and make the task status="Assigned" 

# #do_task is method enables the employee to do the task by marking its status as "Done" 


# ---------------------------------------------------------------
# create some manager,employee and task instances 
# assign tasks to employees and let them do some tasks
# list all employee's tasks 
# list all manager's tasks
# list all employee's not completed tasks
class Person 
  attr_accessor :name,:phone.:position_title
  def initialaze(name,phone,position_title)
    @name=name
    @phone=phone
    @position_title=position_title
end
def print_card
  print "#{name},#{phone},#{position_title}"
end

class Manager < person
end

class Employee < person
end

  class Task
    def initialaze(title,status)
      @title=title
      @status=status
    end
  end