package com.example.exerciseandroid.todoapp

import android.app.Dialog
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.RadioButton
import android.widget.RadioGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.exerciseandroid.R
import com.example.exerciseandroid.todoapp.TaskCategory.*
import com.google.android.material.floatingactionbutton.FloatingActionButton

class TODOActivity : AppCompatActivity() {

    private val categories = listOf(
        Business,
        Personal,
        Other
    )

    private val tasks = mutableListOf(
        Task("Task 1P", Personal),
        Task("Task 1P", Personal),
        Task("Task 1P", Personal),
        Task("Task 2B", Business),
        Task("Task 2B", Business),
        Task("Task 2B", Business),
        Task("Task 3O", Other),
        Task("Task 3O", Other),
        Task("Task 3O", Other),
    )

    private lateinit var rvCategories: RecyclerView
    private lateinit var categoriesAdapter: CategoriesAdapter

    private lateinit var rvTasks: RecyclerView
    private lateinit var tasksAdapter: TasksAdapter

    private lateinit var fabAddTask: FloatingActionButton

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_todo)
        initComponents()
        initUI()
        initListeners()
    }


    private fun initComponents() {
        rvCategories = findViewById(R.id.rvCategories)
        rvTasks = findViewById(R.id.rvTasks)
        fabAddTask = findViewById(R.id.fabAddTask)
    }

    private fun initUI() {
        categoriesAdapter = CategoriesAdapter(categories) { position -> updateCategories(position) }
        rvCategories.layoutManager =
            LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        rvCategories.adapter = categoriesAdapter

        tasksAdapter = TasksAdapter(tasks) { position -> onItemSelected(position) }
        rvTasks.layoutManager = LinearLayoutManager(this)
        rvTasks.adapter = tasksAdapter

    }


    private fun initListeners() {
        fabAddTask.setOnClickListener {
            showDialog()
        }
    }

    private fun showDialog() {
        val dialog = Dialog(this)
        dialog.setContentView(R.layout.dialog_task)
        dialog.window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))

        val btnAddTask: Button = dialog.findViewById(R.id.btnAddTask)
        val etTask: EditText = dialog.findViewById(R.id.etTask)
        val rgCategories: RadioGroup = dialog.findViewById(R.id.rgCategories)

        btnAddTask.setOnClickListener {
            val currentTask = etTask.text.toString()
            val selectedId = rgCategories.checkedRadioButtonId
            val selectedRadioButton: RadioButton = rgCategories.findViewById(selectedId)

            val currentCategory: TaskCategory = when (selectedRadioButton.text) {
                getString(R.string.todo_radio_button_text_business) -> Business
                getString(R.string.todo_radio_button_text_personal) -> Personal
                else -> Other
            }

            if (currentTask.isEmpty()) {
                etTask.error = "Task cannot be empty"
                return@setOnClickListener
            }

            tasks.add(Task(currentTask, currentCategory))
            updateTasks()
            dialog.hide()
        }
        dialog.show()

    }

    private fun updateTasks() {
        val selectedCategories: List<TaskCategory> =
            categories.filter { category -> category.isSelected }

        val newTasks = tasks.filter { task -> selectedCategories.contains(task.category) }
        tasksAdapter.tasks = newTasks
        tasksAdapter.notifyDataSetChanged()
    }

    private fun updateCategories(position: Int) {
        categories[position].isSelected = !categories[position].isSelected
        categoriesAdapter.notifyItemChanged(position)
        updateTasks()
    }

    private fun onItemSelected(position: Int) {
        tasks[position].isSelected = !tasks[position].isSelected
        updateTasks()
    }

}